import { TransformSettingsView } from "../TransformSettings";
import style from "./ImageSettings.module.css";

function ImageSettingsView() {
  return (
    <div className={style.image_settings}>
      <TransformSettingsView />
    </div>
  );
}

export { ImageSettingsView };
