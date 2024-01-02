import { Photo } from "../model/types";

function savePhoto(src: string, sourse: "bs64" | "link"): Photo {
  return {
    source: sourse,
    src: src,
  };
}

export { savePhoto };
