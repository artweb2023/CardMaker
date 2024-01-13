import * as htmlToImage from "html-to-image";

function createCanvasImage(canvasId: string) {
  const canvas = document.getElementById(canvasId) as HTMLElement;
  if (!canvas) {
    alert("Ошибка: Холст не выбран");
    return;
  }
  const tagValue = document.querySelector(
    ".MenuBarPencil_menu-bar-pencil__text__NSDLu",
  );
  htmlToImage.toJpeg(canvas).then(function (dataUrl) {
    const link = document.createElement("a");
    link.download = tagValue?.textContent + ".pdf";
    link.href = dataUrl;
    link.click();
  });
}

export { createCanvasImage };
