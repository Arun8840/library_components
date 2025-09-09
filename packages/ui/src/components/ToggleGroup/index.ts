import { ToggleGroupItem } from "./toggle-group-item";
import ToggleRoot from "./toggle-root";

const ToggleGroup = Object.assign(ToggleRoot, {
  GroupItem: ToggleGroupItem,
});

export { ToggleGroup };
