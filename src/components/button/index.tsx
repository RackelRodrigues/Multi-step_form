import styles from "./styles.module.scss";

interface props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Value: string;
  onclick?: () => void;
  isDisabled: boolean;
  variant: "primary" | "secondary" | "terciary";
}

const Button = ({ Value, onclick, isDisabled, variant, ...props }: props) => {
  return (
    <>
      <button
        disabled={isDisabled}
        onClick={onclick}
        className={`${styles.button} ${
          variant === "primary"
            ? styles.primary
            : variant === "secondary"
            ? styles.secondary
            : styles.terciary
        }`}
        {...props}
      >
        {Value}
      </button>
    </>
  );
};

export default Button;
