import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const AudioStream = ({ voiceId, modelId, text, apiKey, voiceSettings }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const requestInProgress = useRef(false); // Add this line


  const startStreaming = async () => {
    if (requestInProgress.current) {
      // A request is already in progress, so we return early
      return;
    }
    requestInProgress.current = true; // Set the ref to true when a request starts
    setLoading(true);
    setError("");
  
    const baseUrl = "https://api.elevenlabs.io/v1/text-to-speech";
    const headers = {
      "Content-Type": "application/json",
      "xi-api-key": apiKey,
    };
  
    const requestBody = {
      model_id: modelId,
      text,
      voice_settings: voiceSettings,
    };
  
    try {
      const response = await axios.post(`${baseUrl}/${voiceId}`, requestBody, {
        headers,
        responseType: "blob",
      });
  
      if (response.status === 200) {
        const audio = new Audio(URL.createObjectURL(response.data));
        audio.play();
      } else {
        setError("Error: Unable to stream audio.");
      }
    } catch (error) {
      setError("Error: Unable to stream audio.");
    } finally {
      setLoading(false);
      requestInProgress.current = false; // Set the ref to false when the request finishes
    }
  };

  // Call startStreaming when the component mounts
  useEffect(() => {
    startStreaming();
  }, [text]); // Add text to the dependency array

  return (
    <div>
      {error && <p>{error}</p>}
    </div>
  );
};

export default AudioStream;