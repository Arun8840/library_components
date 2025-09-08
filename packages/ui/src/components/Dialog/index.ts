import DialogClose from "./dialog-close";
import DialogRoot from "./dialog-root";
import { DialogDescription } from "./dialog-description";
import { DialogFooter } from "./dialog-footer";
import { DialogTitle } from "./dialog-title";
import { DialogTrigger } from "./dialog-trigger";
import { DialogContent } from "./dialog-content";

const Dialog = Object.assign(DialogRoot, {
  Trigger: DialogTrigger,
  Content: DialogContent,
  Title: DialogTitle,
  Description: DialogDescription,
  Footer: DialogFooter,
  Close: DialogClose,
});

export { Dialog };
