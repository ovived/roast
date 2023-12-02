"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/OIkOLEjhq76
 */
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectGroup,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FiUpload, FiCamera } from "react-icons/fi";
import { useState, useRef } from "react";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import AudioStream from "./audioStream.js";

export default function Component() {
  const [isRoasting, setIsRoasting] = useState(false);
  const [isCameraOn, setCameraOn] = useState(false);
  const [iconPosition, setIconPosition] = useState("center");
  const [transcript, setTranscript] = useState("Stand-up bit transcript...");
  const [messages, setMessages] = useState([]); // Add this line
  const [lastMessage, setLastMessage] = useState(null);

  const requestInProgress = useRef(false);
  const intervalId = useRef(null); // Use a ref to store the interval ID

  const startRoast = async () => {
    const sendSingleImage = true; // Change this to false if you want to send multiple images

    setIsRoasting(true);
    toast("Roast starting....");

    const processImage = async () => {
      if (requestInProgress.current) {
        // A request is already in progress, so we skip this interval
        return;
      }

      requestInProgress.current = true;
      const videoElement = document.getElementById("cameraFeed");
      const canvas = document.createElement("canvas");
      canvas.width = videoElement.videoWidth;
      canvas.height = videoElement.videoHeight;
      canvas.getContext("2d").drawImage(videoElement, 0, 0);
      const imageUrl = canvas.toDataURL("image/jpeg", 1.0);

      const response = await fetch("/api/processImage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageUrl, messages }),
      });

      const data = await response.json();
      const newMessage = data.choices[0].message;
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    
     // Set the last message
  setLastMessage(newMessage);


      requestInProgress.current = false;
    };

    if (sendSingleImage) {
      processImage();
    } else {
      // Capture frames every 3 seconds
      intervalId.current = setInterval(processImage, 3000);
    }
  };

  const stopRoast = () => {
    setIsRoasting(false);
    toast("Roast stopped!");
    clearInterval(intervalId.current);
    requestInProgress.current = false;
  };

  const handleUploadClick = () => {
    document.getElementById("fileUpload").click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
  };

  const handleCameraClick = async () => {
    if (!isCameraOn) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        const videoElement = document.getElementById("cameraFeed");
        videoElement.srcObject = stream;
        videoElement.play();
        setCameraOn(true);
        setIconPosition("bottom-right");
      } catch (err) {
        console.error("Error accessing camera: ", err);
      }
    } else {
      const videoElement = document.getElementById("cameraFeed");
      if (videoElement && videoElement.srcObject) {
        const tracks = videoElement.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
        videoElement.srcObject = null;
        setCameraOn(false);
        setIconPosition("center");

        // Clear the interval when the camera is turned off
        clearInterval(this.intervalId);
      }
    }
  };
  return (
    <div
      key="1"
      className="w-full h-full flex flex-col items-center justify-center gap-10 p-4"
    >
      <ToastContainer />
      <h1 className="text-4xl font-bold">Roast Me</h1>
      <div className="w-full max-w-[500px] flex flex-col gap-6">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a Roaster" />
          </SelectTrigger>
          <SelectContent style={{ backgroundColor: "white" }}>
            <SelectGroup>
              <SelectItem value="roaster1">
                <div className="flex items-center gap-2">
                  <Avatar className="w-6 h-6">
                    <AvatarImage
                      alt="Roaster 1"
                      src="/placeholder.svg?height=24&width=24"
                    />
                    <AvatarFallback></AvatarFallback>
                  </Avatar>
                  Chris Rock
                </div>
              </SelectItem>
              <SelectItem value="roaster2">
                <div className="flex items-center gap-2">
                  <Avatar className="w-6 h-6">
                    <AvatarImage
                      alt="Roaster 2"
                      src="/placeholder.svg?height=24&width=24"
                    />
                    <AvatarFallback>R2</AvatarFallback>
                  </Avatar>
                  Kevin Hart
                </div>
              </SelectItem>
              <SelectItem value="roaster3">
                <div className="flex items-center gap-2">
                  <Avatar className="w-6 h-6">
                    <AvatarImage
                      alt="Roaster 3"
                      src="/placeholder.svg?height=24&width=24"
                    />
                    <AvatarFallback>R3</AvatarFallback>
                  </Avatar>
                  Dave Chappelle
                </div>
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div
          className={`cameraView w-full bg-gray-200 dark:bg-gray-800 rounded-md relative hover:bg-gray-300 ${
            isCameraOn ? "opacity-100" : "opacity-50"
          } pb-[56.25%]`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={`flex flex-col ${
                iconPosition === "center"
                  ? "items-center justify-center"
                  : "items-end justify-end"
              } gap-4 absolute z-10 ${
                iconPosition === "center" ? "" : "bottom-0 right-0 p-4"
              } ${
                isCameraOn
                  ? "opacity-0 hover:opacity-100 transition-opacity duration-200"
                  : "opacity-100"
              }`}
            >
              <FiUpload
                className="cursor-pointer"
                size={isCameraOn ? 24 : 64}
                onClick={handleUploadClick}
              />
              <FiCamera
                className="cursor-pointer"
                size={isCameraOn ? 24 : 64}
                onClick={handleCameraClick}
              />
            </div>
            <video
              id="cameraFeed"
              className="w-full h-full absolute"
              style={{ objectFit: "cover", pointerEvents: "none" }}
            />
          </div>
        </div>
        <Button
          className="w-full bg-black text-white"
          onClick={isRoasting ? stopRoast : startRoast}
        >
          {isRoasting ? "Stop Roast" : "Roast Me!"}
        </Button>
      </div>
      <div className="w-full max-w-[500px] flex flex-col gap-6">
        <div className="transcript-container bg-zinc-100 p-4 rounded-lg dark:bg-zinc-800">
          <h2 className="transcript-text font-semibold text-lg">Transcript</h2>
          {messages.map((message, index) => (
            <p key={index} className="mt-2 text-zinc-700 dark:text-zinc-200">
              {message.content}
            </p>
          ))}
        </div>
    {lastMessage && (
  <AudioStream 
    text={lastMessage.content} // Pass only the content field
    //voiceId="VvKvKZT8rAxSK8JXr82H"  //
    //voiceId="5gHW1pGud79c5TYEDR1t" // Oz
    voiceId="EBq0KZkJHDX0jtjAWHNd" // Ramsay
   // voiceId="xSCThJIHqqZtl3r8Wu4u" //Dave 
    apiKey="b10577501065a2cddfb46fb4bd2b0e67" 
    modelId="eleven_multilingual_v2"
            voiceSettings={{
              stability: 0.4,
              similarity_boost: 0.85,
              style: 0,
              use_speaker_boost: true
            }}
  />
)}
      </div>
      <input
        type="file"
        id="fileUpload"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </div>
  );
}
