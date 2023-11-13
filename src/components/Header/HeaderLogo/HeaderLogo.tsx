import React from "react";
import styles from "./HeaderLogo.module.css";

type LogoProps = {
  className: string;
  text: string;
};

function HeaderLogo({ className, text }: LogoProps) {
  return (
    <a className={styles[className]} href="/">
      {text}
    </a>
  );
}

export { HeaderLogo };
