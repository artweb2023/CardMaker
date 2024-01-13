import styles from "./TextSettingFontFamily.module.css";

type TextSettingFontFamilyViewProps = {
  text: string;
  onSelect: () => void;
};

function TextSettingFontFamilyView({
  onSelect,
  text,
}: TextSettingFontFamilyViewProps) {
  return (
    <button className={styles.content} onClick={onSelect}>
      {text}
    </button>
  );
}

export { TextSettingFontFamilyView };
