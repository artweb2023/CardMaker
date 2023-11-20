import React from "react";
import style from "./TextSettings.module.css";
import { TextSettingsInput } from "./TextSettingInput/TextSettingInput";
import { TextSettingButton } from "./TextSettingButton/TextSettingButton";
import { TextInfo } from "../../../../../model/types";

type TextSettingsProps = {
  textData: TextInfo;
};

function TextSettings({ textData }: TextSettingsProps) {
  return (
    <div className={style.settings}>
      <TextSettingsInput
        className={"color"}
        type={"color"}
        value={textData.color.color}
      />
      <TextSettingButton
        classNameButton={"font_family"}
        classNameSpan={"font_family_icons"}
        text={"Montserrat"}
      />
      <div className={style.font_size}>
        <TextSettingsInput
          className={"font_size_input"}
          placeholder={textData.fontSize.toString()}
        />
        <div className={style.font_size_buttons}>
          <TextSettingButton
            classNameButton={"font_size_button"}
            classNameSpan={"font_size_button_up_background"}
          />
          <TextSettingButton
            classNameButton={"font_size_button"}
            classNameSpan={"font_size_button_down_background"}
          />
        </div>
      </div>
      <div className={style.button_group}>
        <TextSettingButton
          classNameButton={"button"}
          classNameSpan={"button_bold_background"}
        />
        <TextSettingButton
          classNameButton={"button"}
          classNameSpan={"button_italic_background"}
        />
        <TextSettingButton
          classNameButton={"button"}
          classNameSpan={"button_underline_background"}
        />
      </div>
    </div>
  );
}

export { TextSettings };
