import styles from "./PhotoLoadView.module.css";

type PhotoLoadViewProps = {
  src: string;
};

function PhotoLoadView({ src }: PhotoLoadViewProps) {
  return <img className={styles.image} src={src} />;
}

export { PhotoLoadView };
