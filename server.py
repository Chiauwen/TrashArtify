import cv2
import numpy as np
from flask import Flask, request, jsonify
from flask_cors import CORS
from main import main
import base64

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes


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
        
        elif data == "frame":
            frame_data = request.form.get("frame")
            frame = cv2.imdecode(np.fromstring(base64.b64decode(frame_data), dtype=np.uint8), 1)
            print("Received frame from React")

            trashes_info = main(data, frame)

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