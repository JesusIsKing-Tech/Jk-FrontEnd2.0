import React from 'react';
import styles from './Input.module.css'; 

const Input = ({ label, type, placeholder, children, name, onChange, value, readOnly, style }) => {
  return (
    <div className={styles.boxLabels}>
      <div>{label}</div>
      <input
      type={type}
      placeholder={placeholder}
      className={styles.input}
      name={name}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
      style={style}
        />
      {children}
    </div>
  );
};

export default Input;
