import { useState, ChangeEvent } from "react";

interface EditableTextHook {
  isEditing: boolean;
  inputText: string;
  handleButtonClick: () => void;
  renderContent: (
    text: string,
    textClass: string,
    inputClassName: string,
  ) => JSX.Element;
}

function useEditableText(initialText: string): EditableTextHook {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>(initialText);

  const handleButtonClick = (): void => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputText(event.target.value);
  };

  const renderContent = (
    text: string,
    textClass: string,
    inputClassName: string,
  ): JSX.Element => {
    if (isEditing) {
      return (
        <input
          className={inputClassName}
          value={inputText}
          onChange={handleInputChange}
          placeholder={text}
        />
      );
    } else {
      return <p className={textClass}>{inputText}</p>;
    }
  };

  return { isEditing, inputText, handleButtonClick, renderContent };
}

export { useEditableText };
