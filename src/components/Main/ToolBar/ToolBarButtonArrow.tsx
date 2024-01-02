import styles from "./ToolBarButtonArrow.module.css";

type ButtonArrowProps = {
  className: string;
};

function ButtonArrow({ className }: ButtonArrowProps) {
  return <button className={styles[className]}></button>;
}

export { ButtonArrow };
