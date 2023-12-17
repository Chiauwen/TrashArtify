import React, { useState, useEffect, useRef } from 'react'
import Webcam from 'react-webcam'
import axios from 'axios'
import { Header } from '../components'
import Container from 'react-bootstrap/Container'
import './DetectItem.css'
const apiKey = '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'

const DetectItem = () => {
  const [generatedImage, set_generatedImage] = useState(null)
  const [image, setImage] = useState(null)
  const [showCamera, setShowCamera] = useState(false)
  const [detectionResult, setDetectionResult] = useState(null)
  const webcamRef = useRef(null)
  const [loading, setLoading] = useState(false)

  const imageGenerator = async (trashType) => {
    if (trashType === '') {
      return 0
    }

    setLoading(true)
  }

  useEffect(() => {
    if (detectionResult && detectionResult.length > 0) {
      const trashType = detectionResult[0].trash_type
      imageGenerator(trashType)
    }
  }, [detectionResult])

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
    setShowCamera(!showCamera)
    setImage(null)

    const formData = new FormData()
    formData.append('choice', 'frame')

    if (showCamera) {
      const screenshot = webcamRef.current.getScreenshot()
      formData.append('frame', screenshot)
    }

    selection(formData)
  }

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
      setDetectionResult(response.data)
    } catch (error) {
      console.error('Error sending data to Flask:', error)
    }
  }

  return (
    <div className="detection">
      <Header />
      <h1 className="hero-heading">
        Trash Classifier & AI Craft Ideas Generator
      </h1>
      <Container className="main-container">
        <div className="left-section">
          <div className="detect-item">
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            <p>or</p>
            <button id="webcam" onClick={handleCameraToggle}>
              {showCamera ? 'Turn off Camera' : 'Turn On Camera'}
              {showCamera && (
                <img src="http://localhost:5000/video_feed" alt="Video" />
              )}
            </button>
            {showCamera && <Webcam ref={webcamRef} />}
            {image && (
              <div className='photo'>
                <h2>Uploaded Image Preview</h2>
                <img src={image} alt="Uploaded" style={{ maxWidth: '100%' }} />
              </div>
            )}
            
            {detectionResult && (
              <div className='photo-result'>
                <h2>Detection Result</h2>
                {detectionResult.map((result, index) => (
                  <div key={index}>
                    <p>
                      Recyclable Type: {result.recyclable_type}, <br/> Trash Type:{' '}
                      {result.trash_type}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="right-section">
          {loading ? (
            <p>Generating Ideas...</p>
          ) : (
            generatedImage && (
              <div>
                <h2>Generated Ideas</h2>
                <img
                  src={generatedImage}
                  alt="Craft Ideas"
                  style={{ maxWidth: '100%' }}
                />
              </div>
            )
          )}
        </div>
      </Container>
    </div>
  )
}

export default DetectItem
