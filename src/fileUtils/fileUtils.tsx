import { Editor } from "../model/types";

function saveModelToLocal(model: Editor) {
  const text = JSON.stringify(model);
  const name = "sample.json";
  const type = "text/plain";
  const a = document.createElement("a");
  const file = new Blob([text], { type: type });
  a.href = URL.createObjectURL(file);
  a.download = name;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  console.log("Модель успешно сохранена на локальном диске.");
}

function loadModelFromLocal(onLoad: (model: Editor) => void) {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".json";

  input.addEventListener("change", (event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (readerEvent) => {
        const content = readerEvent.target?.result as string;
        const model = JSON.parse(content);
        onLoad(model);
      };
      reader.readAsText(file);
    }
  });

  input.click();
  console.log("Модель успешно загружена из файла.");
}

export { saveModelToLocal, loadModelFromLocal };
