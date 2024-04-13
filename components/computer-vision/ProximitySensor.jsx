import React, { useEffect, useRef } from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";

const ProximitySensor = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  let modelPromise;
  let model;
  let predictions;
  let maxDistance = 75; // Adjust as needed

  useEffect(() => {
    const setupVideo = async () => {
      modelPromise = cocoSsd.load({ base: "mobilenet_v2" });
      model = await modelPromise;

      const video = videoRef.current;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      video.addEventListener(
        "play",
        () => requestAnimationFrame(updateCanvas),
        false,
      );

      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
          .getUserMedia({ video: true })
          .then(function (stream) {
            video.srcObject = stream;
          })
          .catch(function (error) {
            console.error("Error accessing webcam:", error);
          });
      }
    };

    setupVideo();
  }, []);

  const drawBbox = () => {
    predictions.forEach((prediction) => {
      if (prediction.class === "person") {
        const {
          distanceBreach,
          bbox: [x, y, width, height],
          distanceBreachLinks,
        } = prediction;
        let color = "rgb(0, 250, 0)"; // Default color

        if (distanceBreach) {
          color = "rgb(250, 0, 0)"; // Red for breached distance
        }

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.lineWidth = 1;
        ctx.strokeRect(x, y, width, height);
        ctx.font = "9px Arial";
        ctx.fillText("Person", x, y - 2);

        // Draw distance lines and text
        distanceBreachLinks.forEach(([x1, y1, x2, y2, dist]) => {
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();

          // Draw distance text
          const midX = (x1 + x2) / 2;
          const midY = (y1 + y2) / 2;
          ctx.fillText(`${dist.toFixed(2)}px`, midX, midY);
        });
      }
    });
  };

  const setDistance = (person) => {
    const [x, y, w, h] = person.bbox;
    let tmpBreachDistances = [];

    predictions.forEach(({ bbox }) => {
      const [x2, y2, w2, h2] = bbox;
      const a = x + w / 2 - (x2 + w2 / 2);
      const b = y + h / 2 - (y2 + h2 / 2);
      const distance = Math.sqrt(a * a + b * b);

      if (distance !== 0 && distance < maxDistance) {
        person.distanceBreach = true;
        tmpBreachDistances.push([
          x + w / 2,
          y + h / 2,
          x2 + w2 / 2,
          y2 + h2 / 2,
          distance, // Add distance
        ]);
      }
    });

    person.distanceBreachLinks = tmpBreachDistances;
  };

  const updateCanvas = async () => {
    const { ended, paused, width, height } = videoRef.current;
    if (ended || paused) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(videoRef.current, 0, 0, width, height);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    predictions = await model.detect(imageData);
    drawBbox();

    requestAnimationFrame(updateCanvas);
  };

  return (
    <div className="social-distancing-container">
      <canvas ref={canvasRef} className="social-distancing-canvas"></canvas>
      <video
        ref={videoRef}
        className="social-distancing-video"
        playsInline
        muted
        autoPlay
      ></video>
    </div>
  );
};

export default ProximitySensor;
