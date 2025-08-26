import React from 'react';
import styles from './Button.module.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  disabled = false, 
  loading = false,
  type = 'button',
  ...props 
}) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${
    disabled || loading ? styles.disabled : ''
  }`;

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <span className={styles.spinner}></span>}
      {children}
    </button>
  );
};

export default Button;