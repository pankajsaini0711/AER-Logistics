import React from 'react';
import './video-player.scss';

interface VideoPlayerProps {
  videoSrc: string;
  poster?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc }) => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="video-background"
    >
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;