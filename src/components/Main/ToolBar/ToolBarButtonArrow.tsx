import styles from "./ToolBarButtonArrow.module.css";

type ButtonArrowProps = {
  className: string;
  onClick: () => void;
};

function ButtonArrow({ className, onClick }: ButtonArrowProps) {
  return <button className={styles[className]} onClick={onClick}></button>;
}

export { ButtonArrow };
