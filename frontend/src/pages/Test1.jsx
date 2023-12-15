import React, { useRef, useState, useEffect } from 'react';
import Webcam from 'react-webcam';

const Test1 = () => {
  const webcamRef = useRef(null);
  const [capturedFrame, setCapturedFrame] = useState(null);

  const captureFrame = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedFrame(imageSrc);

    // Send the captured frame to Flask
    fetch('http://localhost:5000/process-frame', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ frame: imageSrc }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Data received from Flask (processed frame)
        console.log('Data from Flask:', data);
      })
      .catch((error) => {
        console.error('Error sending frame to Flask:', error);
      });
  };

  return (
    <div>
      <Webcam ref={webcamRef} />
      <button onClick={captureFrame}>Capture Frame</button>

      {/* Display the captured frame */}
      {capturedFrame && <img src={capturedFrame} alt="Captured Frame" />}
    </div>
  );
};

export default Test1;
