import { Canvas, CardTemplate } from "../model/types";
import { generateRandomId } from "./generateRandomId";

function mapToCardTemplate(jsonData: string): Canvas {
  const parsedData: { canvas: Canvas } = JSON.parse(jsonData);
  const canvas = parsedData.canvas;
  return canvas;
}

function getTemplate(file: string): CardTemplate {
  const canvas: Canvas = mapToCardTemplate(file);
  const cardTemplate = {
    id: generateRandomId(),
    canvas: canvas,
  };
  return cardTemplate;
}

export { getTemplate };
