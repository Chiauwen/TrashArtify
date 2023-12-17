import React, { useState, useEffect, useRef } from 'react'
import Webcam from 'react-webcam'
import axios from 'axios'
import { Header, Footer } from '../components'
import Container from 'react-bootstrap/Container'
import './DetectItem.css'

const apiKey = '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'


function dataURLtoBlob(dataURL) {
  const arr = dataURL.split(',')
  const mime = arr[0].match(/:(.*?);/)[1]
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], { type: mime })
}
const DetectItem = () => {
  const [generatedImage, setGeneratedImage] = useState(null)
  const [image, setImage] = useState(null)
  const [showCamera, setShowCamera] = useState(false)
  const [detectionResult, setDetectionResult] = useState(null)
  const webcamRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const [lastDetectedType, setLastDetectedType] = useState(null)
  const [refreshed, setRefreshed] = useState(false)

  const handleRefresh = () => {
    setRefreshed(true)
    window.location.reload() // Reload the page
  }

  const imageGenerator = async (trashType) => {
    if (trashType === '' || trashType === lastDetectedType || setRefreshed === false) {
      return 0
    }

    setLoading(true)

    try {
      const response = await fetch(
        'https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            inputs: `Generate unique and creative handicraft ideas using ${trashType}. 
            Imagine crafting beautiful and practical items that showcase the versatility of ${trashType}. 
            Consider functionality, aesthetics, and sustainability in your suggestions. 
            Feel free to explore various techniques and materials, ensuring the projects are not only craftable 
            but also environmentally friendly.`,

          }),
        }
      )

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const blob = await response.blob()
      const imageUrl = URL.createObjectURL(blob)

      setGeneratedImage(imageUrl)
      setLastDetectedType(trashType)
    } catch (error) {
      console.error('Error generating image:', error)
    } finally {
      setLoading(false)
    }
    setRefreshed(true)
  }

  useEffect(() => {
    if (detectionResult && detectionResult.length > 0) {
      const trashType = detectionResult[0].trash_type
      imageGenerator(trashType)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detectionResult, refreshed])

  useEffect(() => {
    // Fetch webcam results only if the camera is turned on
    const fetchWebcamData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/webcam_info')
        setDetectionResult(response.data)
      } catch (error) {
        console.error('Error getting webcam detection result:', error)
      }
    }

    const intervalId = setInterval(() => {
      // Fetch webcam results only if the camera is turned on
      if (showCamera) {
        fetchWebcamData()
      }
    }, 2000) // Adjust the interval time as needed

    return () => clearInterval(intervalId) // Cleanup on component unmount
  }, [showCamera])

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

    if (showCamera && webcamRef.current) {
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
     <div className="header-container">
     <div className="header-left">
          <h2>Detect Trash</h2>
        </div>
        <div className="header-right">
          <h2>Generate Handicraft Ideas</h2>
        </div>
     </div>
      <Container className="main-container">
        <div className="left-section">
          <div className="detect-item">
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            <p>or</p>
            <button id="webcam" onClick={handleCameraToggle}>
              {showCamera ? 'Turn off Camera' : 'Turn On Camera'}
            </button>
            {showCamera && (
              <img
                className="webcam-result"
                src="http://localhost:5000/video_feed"
                alt="Video"
              />
            )}
            {image && (
              <div className="photo">
                <h2>Uploaded Image Preview</h2>
                <img src={image} alt="Uploaded" style={{ maxWidth: '100%' }} />
              </div>
            )}

            {detectionResult && (
              <div className="photo-result">
                <h2>Detection Result</h2>
                {detectionResult.map((result, index) => (
                  <div key={index}>
                    <p>
                      Recyclable Type: {result.recyclable_type}, <br /> Trash
                      Type: {result.trash_type}
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
                <h2>Generated Ideas With {lastDetectedType}</h2>
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
      <Footer/>
    </div>
  )
}

export default DetectItem
