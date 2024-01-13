import { EditorView } from "./components/Editor/Editor";
import { useUndoRedoListeners } from "../src/hook/useUndoRedoListeners";
import styles from "./app.module.css";

function App() {
  useUndoRedoListeners();
  return (
    <div className={styles.editor}>
      <EditorView />
    </div>
  );
}

export default App;
