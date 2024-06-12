// components/Camera.tsx
import React, { useRef, useState } from 'react';

const Camera = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [streaming, setStreaming] = useState<boolean>(false);

  const openCamera = async () => {
    setError(null); // Reset error state
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setStreaming(true); // Indicar que el streaming ha comenzado
      }
    } catch (err) {
      console.error("Error accessing the camera", err);
      setError('Error accessing the camera. Please make sure you have granted permissions.');
    }
  };

  return (
    <div>
      <button onClick={openCamera} disabled={streaming}>Open Camera</button>
      {error && <p>{error}</p>}
      <video ref={videoRef} autoPlay style={{ width: '100%', height: 'auto' }} />
    </div>
  );
};

export default Camera;