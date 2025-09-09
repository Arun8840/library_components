import { TooltipContent } from "./tooltip-content";
import TooltipRoot from "./tooltip-root";
import { TooltipTrigger } from "./tooltip-trigger";

const Tooltip = Object.assign(TooltipRoot, {
  Trigger: TooltipTrigger,
  Content: TooltipContent,
});

export { Tooltip };
