import React, { useState, useEffect } from 'react';
import bg from '../Assets/images/gergeg-01.png';

const AnimatedImage = () => {
  const [opacity, setOpacity] = useState(0);
  const animationDuration = 3000; 

  useEffect(() => {
    const interval = setInterval(() => {
    
      setOpacity((prevOpacity) => (prevOpacity === 0.2 ? 1 : 0.2));
    }, animationDuration);

    return () => clearInterval(interval); 
  }, []);

  const imageStyle = {
    opacity,
    transition: `opacity ${animationDuration / 500}s ease-in-out`,
  };

  // eslint-disable-next-line jsx-a11y/img-redundant-alt
  return <img src={bg} alt="Animated Image" style={imageStyle} className='w-full object-cover h-full'/>;
};

export default AnimatedImage;
