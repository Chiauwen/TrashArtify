import React, { useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';

const DetectItem = () => {
  const [image, setImage] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  const [detectionResult, setDetectionResult] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
      setShowCamera(false);

      const formData = new FormData();
      formData.append('choice', 'image');
      formData.append('file', file);

      selection(formData);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleCameraToggle = async () => {
    setShowCamera(!showCamera);
    setImage(null);

    const formData = new FormData();
    formData.append('choice', 'webcam');

    selection(formData);
  };

  const selection = async (formData) => {
    try {
      const response = await axios.post(
        'http://localhost:5000/detect_item',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      // Update state with the detection result
      setDetectionResult(response.data);
    } catch (error) {
      console.error('Error sending data to Flask:', error);
    }
  };

  return (
    <div>
      <h1>
        Upload Image or Turn On Camera <br />
        to <br />
        Classify Trash
      </h1>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <br />
      <button onClick={handleCameraToggle}>
        {showCamera ? 'Turn off Camera' : 'Turn on Camera'}
      </button>

      {showCamera && <Webcam />}

      {image && (
        <div>
          <h2>Uploaded Image Preview</h2>
          <img src={image} alt="Uploaded" style={{ maxWidth: '100%' }} />
        </div>
      )}

      {detectionResult && (
        <div>
          <h2>Detection Result</h2>
          {detectionResult.map((result, index) => (
            <div key={index}>
              <p>
                Class ID: {result.class_id}, Recyclable Type: {result.recyclable_type}, Trash Type: {result.trash_type}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DetectItem;
