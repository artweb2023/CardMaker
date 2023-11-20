import React from "react";
import styles from "./TessSettingInput.module.css";

type TextSettingsInputProps = {
  type?: string;
  className: string;
  placeholder?: string;
  value?: string;
};

function TextSettingsInput({
  type,
  className,
  placeholder,
  value,
}: TextSettingsInputProps) {
  return (
    <input
      className={styles[className]}
      type={type}
      placeholder={placeholder}
      value={value}
    />
  );
}

export { TextSettingsInput };
