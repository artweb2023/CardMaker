import styles from "./BackgroundImageView.module.css";

type BackgroundImageViewProps = {
  src: string;
};

function BackgroundImageView({ src }: BackgroundImageViewProps) {
  return <img className={styles.image} src={src} />;
}

export { BackgroundImageView };
