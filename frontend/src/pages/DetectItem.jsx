import React, { useState, useEffect } from 'react'
import Webcam from 'react-webcam'

const DetectItem = () => {
    const [image, setImage] = useState(null)
    const [showCamera, setShowCamera] = useState(false)
  
    const handleImageUpload = (e) => {
      const file = e.target.files[0]
      const reader = new FileReader()
  
      reader.onloadend = () => {
        setImage(reader.result)
        setShowCamera(false)
      }
  
      if (file) {
        reader.readAsDataURL(file)
      }
    }
  
    const handleCameraToggle = () => {
      setShowCamera(!showCamera)
      setImage(null)
    }
  
    return (
      <div>
        <h1>Image Upload and Camera Example</h1>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        <br />
        <button onClick={handleCameraToggle}>
          {showCamera ? 'Turn off Camera' : 'Turn on Camera'}
        </button>
  
        {showCamera && (
          <div>
            <Webcam />
          </div>
        )}
  
        {image && (
          <div>
            <h2>Uploaded Image Preview</h2>
            <img src={image} alt="Uploaded" style={{ maxWidth: '100%' }} />
          </div>
        )}
      </div>
    )
}

export default DetectItem
