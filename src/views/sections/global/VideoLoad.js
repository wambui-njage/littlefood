import React, { useState } from 'react';
const VideoLoad = React.memo(({ src }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videosrc = getVideoSrc(src);
  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };
return (
    <div className="container">
      <img
        src={thumb}
        className="video-thumb tiny"
        alt="thumb"
        style={{ opacity: isVideoLoaded ? 0 : 1 }}
      />
      <video
   
        autoPlay
        playsInline
        muted
        src={videosrc}
        onLoadedData={onLoadedData}
        className="sample-phone-img sample-phone-img-simple ml-1"
        style={{ opacity: isVideoLoaded ? 1 : 0 }}
      />
    </div>
  );
});



export default VideoLoad;