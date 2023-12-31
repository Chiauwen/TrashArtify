import cv2
from flask import Flask, Response, jsonify, request
from flask_cors import CORS
from webcam import webcam
from photo import photo
import torch
import base64

device = "cuda" if torch.cuda.is_available() else "cpu"
print(f"Using device: {device}")

app = Flask(__name__)
CORS(app)

trash_info = None  # Global variable

def generate_frames():
    global trash_info  # Explicitly declare as global

    frame_generator = webcam()

    while True:
        try:
            frame, local_trash_info = next(frame_generator)

            ret_frame, jpeg_frame = cv2.imencode(".jpg", frame)
            encoded_frame = base64.b64encode(jpeg_frame.tobytes()).decode('utf-8')

            trash_info = local_trash_info  # Update the global variable

            yield (
                b"--frame\r\n"
                b"Content-Type: image/jpeg\r\n\r\n" + jpeg_frame.tobytes() + b"\r\n\r\n"
            )

        except StopIteration:
            break

        
@app.route("/video_feed")
def video_feed():
    return Response(
        generate_frames(), mimetype="multipart/x-mixed-replace; boundary=frame"
    )
        
@app.route("/webcam_info")
def get_webcam_info():
    global trash_info
    trashes_info = trash_info.copy() if trash_info else []
    return jsonify(trashes_info)

@app.route("/detect_item", methods=["OPTIONS", "POST"])
def receive_data():
    global trash_info

    if request.method == "OPTIONS":
        response = jsonify({"status": "success"})

    elif request.method == "POST":
        data = request.form.get("choice")

        if data == "image":
            file = request.files["file"]

            print(f"Received data from React: {data}")
            file.save("user_upload/user.jpg")

            temp = None
            trashes_info = photo()
            trashes_info = list(trashes_info)
            response = jsonify(trashes_info)

            return response

        elif data == "frame":
            trashes_info = trash_info.copy() if trash_info else []
            response = jsonify(trashes_info)
            return response

        else:
            response = jsonify({"status": "error", "message": "Invalid data type"})
            response.status_code = 400

    else:
        response = jsonify({"status": "error", "message": "Method Not Allowed"})
        response.status_code = 405

    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Headers", "Content-Type")

    return response

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, threaded=True, use_reloader=False, debug=True)
