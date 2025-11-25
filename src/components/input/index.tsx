import styles from "./styles.module.scss";
import { ComponentProps } from "react";

interface ContextProps extends ComponentProps<"div"> {}

export function Root({ ...props }: ContextProps) {
  return (
    <div className={styles.Container} {...props}>
      {props.children}
    </div>
  );
}

interface Inputprops extends ComponentProps<"input"> {
  isError?: boolean;
}

export function Field({ isError, ...props }: Inputprops) {
  return (
    <input
      className={`${styles.input} ${isError ? styles.inputError : ""}`}
      {...props}
    />
  );
}
