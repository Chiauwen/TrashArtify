from flask import Flask, request, jsonify
from flask_cors import CORS
from main import main

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/detect_item', methods=['OPTIONS', 'POST'])
def receive_data():
    if request.method == 'OPTIONS':
        response = jsonify({'status': 'success'})
        
    elif request.method == 'POST':
        data = request.form.get('choice')
        file = request.files['file']
        
        print(f"Received data from React: {data}")

        file.save('user_upload/user.jpg')

        trashes_info = main(data)
        
        print("HEllo", trashes_info)

        trashes_info = list(trashes_info)

        response = jsonify(trashes_info)
        
        print("HEllo2")
        
        return response
        
    else:
        response = jsonify({'status': 'error', 'message': 'Method Not Allowed'})
        response.status_code = 405 

    response.headers.add('Access-Control-Allow-Origin', '*')  # Allow CORS for all origins
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')

    return response


if __name__ == '__main__':
    app.run(debug=True)
