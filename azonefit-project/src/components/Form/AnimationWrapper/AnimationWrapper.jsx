import React, { useState, useEffect } from 'react';
import styles from './AnimationWrapper.module.css';

const AnimationWrapper = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, [children]);

  useEffect(() => {
    setIsVisible(false);
  }, [children]);

  return (
    <div 
      className={`${styles.animationWrapper} ${
        isVisible ? styles.fadeIn : styles.fadeOut
      }`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.3s ease-in-out'
      }}
    >
      {children}
    </div>
  );
};

export default AnimationWrapper;