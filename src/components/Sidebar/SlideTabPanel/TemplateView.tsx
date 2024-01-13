import React from "react";
import style from "./TemplateView.module.css";

type TemplateViewProps = {
  src: string;
  onClick: () => void;
};

function TemplateView({ src, onClick }: TemplateViewProps) {
  return (
    <div className={style.wrap}>
      <img className={style.img} src={src} onClick={onClick} />
    </div>
  );
}

export { TemplateView };
