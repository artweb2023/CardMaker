import styles from "./TessSettingInput.module.css";

type TextSettingsInputProps = {
  type?: string;
  className: string;
  placeholder?: string;
  value?: string;
  selectValue: (value: string) => void;
};

function TextSettingsInput({
  type,
  className,
  placeholder,
  value,
  selectValue,
}: TextSettingsInputProps) {
  return (
    <input
      className={styles[className]}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => selectValue(e.target.value)}
    />
  );
}

export { TextSettingsInput };
