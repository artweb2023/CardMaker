import { useState } from "react";
import style from "./TextSettings.module.css";
import { TextSettingsInput } from "./TextSettingInput/TextSettingInput";
import { TextSettingButton } from "./TextSettingButton/TextSettingButton";
import { TransformSettingsView } from "../TransformSettings";
import { TextSettingFontFamilyView } from "./TextSettingFontFamily/TextSettingFontFamily";
import { TextInfo } from "../../../../../model/types";
import { selectEditor } from "../../../../../redux/selectors";
import { useAppSelector, useAppActions } from "../../../../../redux/hooks";
type TextSettingsProps = {
  textData: TextInfo;
};

function TextSettings({ textData }: TextSettingsProps) {
  const {
    createChangeTextColor,
    createChangeTextFontSize,
    createChangeTextBold,
    createChangeTextCoursive,
    createChangeTextUnderline,
    createChangeTextFontFamily,
  } = useAppActions();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const editorInfo = useAppSelector(selectEditor);
  const canvasId = editorInfo.active;
  const selectedCanvas = editorInfo.canvas.find(
    (canvas) => canvas.id === canvasId,
  );
  const elementId = selectedCanvas ? selectedCanvas.active : "";
  let textFontSize = textData.fontSize;
  const handeClickAddFontSize = () => {
    textFontSize += 1;
    createChangeTextFontSize(canvasId, elementId, textFontSize);
  };
  const handleClickDecFontSize = () => {
    textFontSize -= 1;
    createChangeTextFontSize(canvasId, elementId, textFontSize);
  };
  let isTextBold = textData.bold;
  const handleChangeBoldClick = () => {
    isTextBold ? (isTextBold = false) : (isTextBold = true);
    createChangeTextBold(canvasId, elementId, isTextBold);
  };
  let isTextItalic = textData.coursive;
  const handleChangeCoursiveClick = () => {
    isTextItalic ? (isTextItalic = false) : (isTextItalic = true);
    createChangeTextCoursive(canvasId, elementId, isTextItalic);
  };
  let isTextUnderline = textData.underline;
  const handleChangeUnderlineClick = () => {
    isTextUnderline ? (isTextUnderline = false) : (isTextUnderline = true);
    createChangeTextUnderline(canvasId, elementId, isTextUnderline);
  };

  const handleFontFamilySelect = (font: string) => {
    createChangeTextFontFamily(canvasId, elementId, font);
    setIsDropdownVisible(false);
  };

  const frontFamili = [
    "Arial",
    "Helvetica",
    "Times New Roman",
    "Crete Round",
    "Montserrat",
    "Georgia",
    "Verdana",
    "Courier New",
    "Rubik Maps",
    "Lato",
    "Rubik Glitch",
    "Bungee Spice",
    "Open Sans",
    "Lora",
    "Bebas Neue",
    "Alice",
    "Long Cang",
    "Comforter Brush",
    "Bad Script",
    "Rubik Broken Fax",
    "Caveat",
    "Pacifico",
    "Rubik Doodle Shadow",
  ];
  return (
    <div className={style.settings}>
      <TextSettingsInput
        className={"color"}
        type={"color"}
        value={textData.color.color}
        selectValue={(value) =>
          createChangeTextColor(canvasId, elementId, { color: value })
        }
      />
      <div>
        <TextSettingButton
          classNameButton={"font_family"}
          classNameSpan={"font_family_icons"}
          text={textData.fontFamily}
          onClick={() => setIsDropdownVisible(!isDropdownVisible)}
        />
        <div
          className={`${style.dropdown_content} ${
            isDropdownVisible ? style.show : ""
          }`}
        >
          {frontFamili.map((font, index) => (
            <div key={index}>
              <TextSettingFontFamilyView
                text={font}
                onSelect={() => handleFontFamilySelect(font)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={style.font_size}>
        <TextSettingsInput
          className={"font_size_input"}
          placeholder={textData.fontSize.toString()}
          selectValue={(value) =>
            createChangeTextFontSize(canvasId, elementId, Number(value))
          }
        />
        <div className={style.font_size_buttons}>
          <TextSettingButton
            classNameButton={"font_size_button"}
            classNameSpan={"font_size_button_up_background"}
            onClick={handeClickAddFontSize}
          />
          <TextSettingButton
            classNameButton={"font_size_button"}
            classNameSpan={"font_size_button_down_background"}
            onClick={handleClickDecFontSize}
          />
        </div>
      </div>
      <div className={style.button_group}>
        <TextSettingButton
          classNameButton={"button"}
          classNameSpan={"button_bold_background"}
          onClick={handleChangeBoldClick}
        />
        <TextSettingButton
          classNameButton={"button"}
          classNameSpan={"button_italic_background"}
          onClick={handleChangeCoursiveClick}
        />
        <TextSettingButton
          classNameButton={"button"}
          classNameSpan={"button_underline_background"}
          onClick={handleChangeUnderlineClick}
        />
      </div>
      <TransformSettingsView />
    </div>
  );
}

export { TextSettings };
