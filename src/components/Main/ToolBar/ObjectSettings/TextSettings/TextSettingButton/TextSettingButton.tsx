import style from "./TextSettingButton.module.css";

type TextSettingButtonProps = {
  classNameButton: string;
  classNameSpan: string;
  text?: string;
  onClick?: () => void;
};

function TextSettingButton({
  classNameButton,
  classNameSpan,
  text,
  onClick,
}: TextSettingButtonProps) {
  return (
    <button className={style[classNameButton]} onClick={onClick}>
      {text}
      <span className={style[classNameSpan]}></span>
    </button>
  );
}

export { TextSettingButton };
