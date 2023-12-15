import React, { useState, useEffect, useRef } from 'react'
import Webcam from 'react-webcam'
import axios from 'axios'
import { Header } from '../components'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './DetectItem.css'

const DetectItem = () => {
  const [generatedImage, set_generatedImage] = useState(null)
  const [image, setImage] = useState(null)
  const [showCamera, setShowCamera] = useState(false)
  const [detectionResult, setDetectionResult] = useState(null)
  const webcamRef = useRef(null);

  const imageGenerator = async (trashType) => {
    if (trashType === "") {
      return 0;
    }

    try {
      const response = await fetch(
        "https://api.openai.com/v1/images/generations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer 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`,
          },
          body: JSON.stringify({
            prompt: `Beautiful, exciting, and craftable handicraft projects using the trash type ${trashType}.`,
            size: "1024x1024",
            n: 1,
          }),
        }
      );

      const data = await response.json();
      console.log(data);

      set_generatedImage(data.generatedImage);
    } catch (error) {
      console.error('Error generating image:', error);
    }
  };

  useEffect(() => {
    if (detectionResult && detectionResult.length > 0) {
      const trashType = detectionResult[0].trash_type;
      imageGenerator(trashType);
    }
  }, [detectionResult]);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()

    reader.onloadend = () => {
      setImage(reader.result)
      setShowCamera(false)

      const formData = new FormData()
      formData.append('choice', 'image')
      formData.append('file', file)

      selection(formData)
    }

    if (file) {
      reader.readAsDataURL(file)
    }
  }

  const handleCameraToggle = async () => {
    setShowCamera(!showCamera);
    setImage(null);
  
    const formData = new FormData();
    formData.append('choice', 'frame');
  
    if (showCamera) {
      const screenshot = webcamRef.current.getScreenshot();
      formData.append('frame', screenshot);
    }
  
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
      )

      // Update state with the detection result
      setDetectionResult(response.data)
    } catch (error) {
      console.error('Error sending data to Flask:', error)
    }
  }

  return (
    <div className="detection">
      <Header />

      <Container>
        <h4>Just Scan</h4>
        <h5>to</h5>
        <h2>Classify Trash</h2>
        

        <div className="input">
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          <p>or</p>
          <button onClick={handleCameraToggle}>
            {showCamera ? 'Turn off Camera' : 'Turn on Camera'}
          </button>
          {showCamera && <Webcam ref={webcamRef} />}
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
                    Class ID: {result.class_id}, Recyclable Type:{' '}
                    {result.recyclable_type}, Trash Type: {result.trash_type}
                  </p>
                </div>
              ))}
            </div>
          )}
    
      {generatedImage && (
        <div>
          <h2>Generated Ideas</h2>
          <img src={generatedImage} alt="Craft Ideas" style={{ maxWidth: '100%' }} />
        </div>
      )}
    </div>
      </Container>
    </div>
  )
}

export default DetectItem
