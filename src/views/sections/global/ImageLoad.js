import React, { useState, useEffect } from 'react';

const ImageLoad = React.memo(({ src, placeholder, alt = ""  }) => {
  const [loading, setLoading] = useState(true);
  const [currentSrc, updateSrc] = useState(placeholder);


  useEffect(() => {
    // start loading original image
    const imageToLoad = new Image();
    imageToLoad.src = src;
    imageToLoad.onload = () => {
      // When image is loaded replace the src and set loading to false
      setLoading(false);
      updateSrc(src);
    }
  }, [src])

  return (
    <img
      src={currentSrc}
      style={{
        opacity: loading ? 0.09 : 1,
        transition: "opacity .25s ease-in-out",
        height:"-webkit-fill-available"
       
      }}
      alt={alt}
      loading="lazy" 
      className="card-img-top" 
       
  
    />
  )
});

export default ImageLoad;