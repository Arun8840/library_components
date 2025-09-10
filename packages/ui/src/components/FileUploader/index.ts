import { UploaderAction } from "./uploader-action";
import { UploaderButton } from "./uploader-button";
import { UploaderProgress } from "./uploader-progress";
import UploaderRoot from "./uploader-root";

const Uploader = Object.assign(UploaderRoot, {
  Action: UploaderAction,
  Progress: UploaderProgress,
  Upload: UploaderButton,
});

export { Uploader };
