import { useState } from "react";
import { Header } from "../Header/Header";
import { SideBar } from "../Sidebar/SideBar";
import { Main } from "../Main/Main";
import { editorData } from "../../data/data";
import { Editor } from "../../model/types";
import {
  saveModelToLocal,
  loadModelFromLocal,
} from "../../fileUtils/fileUtils";
import styles from "./Editor.module.css";

function EditorView() {
  const [editorModel, setEditorModel] = useState<Editor>(editorData);

  function getEmptyEditorModel(): Editor {
    return {
      canvas: [],
      template: editorData.template,
      history: editorData.history,
    };
  }

  const saveToFile = () => {
    saveModelToLocal(editorModel);
  };

  const loadFromFile = () => {
    loadModelFromLocal((model) => {
      setEditorModel(model);
    });
  };

  const resetModelHandler = () => {
    setEditorModel(getEmptyEditorModel());
  };

  return (
    <div className="editor-wrapper">
      <Header
        saveToFile={saveToFile}
        loadFromFile={loadFromFile}
        resetModelHandler={resetModelHandler}
      />
      <div className={styles.main}>
        <SideBar />
        <Main canvasInfo={editorModel.canvas} />
      </div>
    </div>
  );
}

export { EditorView };
