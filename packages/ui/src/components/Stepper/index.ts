import { StepItem } from "./stepper-item";
import { StepList } from "./stepper-list";
import StepperRoot from "./stepper-root";

const Stepper = Object.assign(StepperRoot, {
  List: StepList,
  Item: StepItem,
});

export { Stepper };
