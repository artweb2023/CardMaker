import styles from "./PanelLoadView.module.css";

function PanelLoadView() {
  return (
    <div className={styles.content}>
      <label className={styles.text}>URL:</label>
      <input className={styles.input} type="text" />
      <button className={styles.button}>Загрузить</button>
      <p className={styles.text}>File:</p>
      <label>
        <input
          type="file"
          name="image"
          accept=".jpg, .jpeg, .png, .gif"
          hidden
        />
        <span className={styles.span_button}>Загрузить</span>
      </label>
    </div>
  );
}

export { PanelLoadView };
