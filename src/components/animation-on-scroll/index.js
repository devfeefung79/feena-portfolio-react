import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const AnimationOnScroll = ({ children, animationClass }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className={`animate ${isVisible ? animationClass : ''}`}>
      {children}
    </div>
  );
};

export default AnimationOnScroll;
