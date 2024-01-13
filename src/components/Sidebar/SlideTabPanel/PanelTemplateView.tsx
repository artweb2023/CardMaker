import style from "./PanelTemplate.module.css";
import { TemplateView } from "./TemplateView";
import img1 from "../../../data/template/2024/2024.png";
import img2 from "../../../data/template/8/8.png";
import img3 from "../../../data/template/happybithday/hbd.png";
import img4 from "../../../data/template/happybithdaycake/hbc.png";
import img5 from "../../../data/template/newyear/newyear.png";
import { useAppActions } from "../../../redux/hooks";
import { useSelector } from "react-redux";
import { selectEditor } from "../../../redux/selectors";

enum Template {
  NewYear2024,
  March8,
  Bithday,
  BithdayCake,
  Christmas,
}

function PanelTemplateView() {
  const editorModel = useSelector(selectEditor);
  const temp = editorModel.template;
  const { createLoadTemplate } = useAppActions();

  const handleSelecedTemplateClick = (templateType: Template) => {
    const selectedTemplate = temp[templateType].canvas;
    createLoadTemplate(selectedTemplate);
  };

  const image = [img1, img2, img3, img4, img5];
  return (
    <div className={style.template}>
      <p className={style.text}>Выбрать шаблон</p>
      {image.map((img, index) => (
        <TemplateView
          key={index}
          src={img}
          onClick={() => handleSelecedTemplateClick(index)}
        />
      ))}
    </div>
  );
}

export { PanelTemplateView };
