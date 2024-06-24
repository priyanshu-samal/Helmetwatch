import React from 'react';

const VideoBackground = () => {
  return (
    <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
      <source src="src\assetsMine\2257259-hd_1920_1080_20fps.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoBackground;
