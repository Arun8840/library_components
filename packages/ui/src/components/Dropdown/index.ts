import { DropdownContent } from "./dropdown-content";
import { DropdownItem } from "./dropdown-item";
import { DropdownRoot } from "./dropdown-root";
import { DropdownTrigger } from "./dropdown-trigger";

const Dropdown = Object.assign(DropdownRoot, {
  Trigger: DropdownTrigger,
  Content: DropdownContent,
  Item: DropdownItem,
});

export { Dropdown };
