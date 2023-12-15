import cv2
import numpy as np
from flask import Flask, Response, request, jsonify
from flask_cors import CORS
from main import main
import base64

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Global variable to store the word "Hello"
hello_text = "Nihao"

def generate_frames():
    # OpenCV camera capture
    cap = cv2.VideoCapture(0)
    
    while True:
        success, frame = cap.read()  # Read a frame from the camera

        # Overlay the word "Hello" on the frame
        cv2.putText(frame, hello_text, (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 255, 255), 2, cv2.LINE_AA)

        # Convert the frame to JPEG
        _, buffer = cv2.imencode('.jpg', frame)
        frame_bytes = buffer.tobytes()

        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame_bytes + b'\r\n')

    cap.release()

@app.route("/video_feed")
def video_feed():
    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route("/detect_item", methods=["OPTIONS", "POST"])
def receive_data():
    if request.method == "OPTIONS":
        response = jsonify({"status": "success"})

    elif request.method == "POST":
        data = request.form.get("choice")
        
        if data == "image":
            file = request.files["file"]

            print(f"Received data from React: {data}")
            file.save("user_upload/user.jpg")
            
            temp = None
            trashes_info = main(data, temp)
            trashes_info = list(trashes_info)
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
    app.run(debug=True)
