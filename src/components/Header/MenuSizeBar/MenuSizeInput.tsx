import React from "react";
import styles from "./MenuSizeInput.module.css";

type MenuInputProps = {
  placehold: string;
  text: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function MenuInput({ placehold, text, onChange }: MenuInputProps) {
  return (
    <div className={styles.menu_input_wrapper}>
      <p className={styles.menu_size_text}>{text}(px)</p>
      <input
        className={styles.menu_size_input}
        name="Size"
        placeholder={placehold}
        onChange={onChange}
      />
    </div>
  );
}

export { MenuInput };
