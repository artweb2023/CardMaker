import { EditorView } from "./components/Editor/Editor";
import styles from "./app.module.css";

function App() {
  return (
    <div className={styles.editor}>
      <EditorView />
    </div>
  );
}

export default App;
