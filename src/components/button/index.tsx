import { ComponentProps } from "react";
import styles from "./styles.module.scss";

interface props extends ComponentProps<"button"> {}

const Button = ({ className, ...props }: props) => {
  return (
    <button
      className={`${styles.button} 
       ${className ? styles[className] : ""}
      `}
      {...props}
    ></button>
  );
};

export default Button;
