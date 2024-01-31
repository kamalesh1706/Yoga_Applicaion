import React, { useRef, useState } from 'react';
import './VideoPlayer.css';

const VideoPlayer = ({ videoUrl }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="video-player">
      <video
        ref={videoRef}
        src={videoUrl}
        onClick={handlePlayPause}
      />
      <div className="controls">
        <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
      </div>
    </div>
  );
};

export default VideoPlayer;
