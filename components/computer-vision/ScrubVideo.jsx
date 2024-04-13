import React, { useRef, useEffect, useState } from "react";

export default function VideoScrubber() {
  const vidRef = useRef(null);
  const [videoDuration, setVideoDuration] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const textContent = [
    "Active Noise Cancellation for immersive sound.",
    "Transparency mode for hearing what’s happening around you.",
    "A customizable fit for all-day comfort.",
    "Magic like you’ve never heard.",
  ];

  useEffect(() => {
    const video = vidRef.current;
    let animationFrameId;

    const updateVideo = () => {
      if (video) {
        const currentTime =
          ((Date.now() % videoDuration) / videoDuration) * video.duration;
        video.currentTime = currentTime;

        // Determine which text to show based on video progress
        const textIndex = Math.floor(
          (currentTime / video.duration) * textContent.length,
        );
        setCurrentTextIndex(textIndex);

        animationFrameId = requestAnimationFrame(updateVideo);
      }
    };

    if (video) {
      video.onloadedmetadata = () => {
        setVideoDuration(video.duration);
        updateVideo();
      };
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [videoDuration]);

  return (
    <div className="bg">
      <video
        id="video"
        className="video"
        playsInline
        webkit-playsinline="true"
        preload="auto"
        muted
        loop
        ref={vidRef}
      >
        <source
          src="https://raw.githubusercontent.com/ksachikonye/preface-hezvo/main/bolt_beijing_100m.mp4"
          type="video/mp4"
        />
      </video>
      <div id="container">
        <h1>AirPods Pro</h1>
      </div>
      <div className="container-hero">
        {textContent.map((text, index) => (
          <div
            key={index}
            className={`h1 ${index === currentTextIndex ? "visible" : ""}`}
          >
            {text}
          </div>
        ))}
      </div>
      <style jsx>{`
        .h1 {
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .visible {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
