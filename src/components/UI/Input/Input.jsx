import React from 'react';
import styles from './Input.module.css';

const Input = ({ 
  type = 'text',
  value,
  onChange,
  placeholder,
  example,
  disabled = false,
  ...props 
}) => {
  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={styles.inputContainer}>
      <input
        type={type}
        value={value || ''}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`${styles.input} ${disabled ? styles.disabled : ''}`}
        {...props}
      />
      {example && (
        <p className={styles.exampleText}>
          <span className={styles.exampleLabel}>Exemplo:</span> {example}
        </p>
      )}
    </div>
  );
};

export default Input;