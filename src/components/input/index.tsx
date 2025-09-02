import styles from "./styles.module.scss";
import React from "react";

//aqui estou dizendo que ele vai pegar todas as propriedades que existem no input
interface props extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  isError?: boolean;
  type: string;
}

const Input = ({ placeholder, onChange, isError, type, ...props }: props) => {
  return (
    <div className={styles.Container}>
      <input
        type={type}
        className={`${styles.input} ${isError ? styles.inputError : ""}`}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default Input;
