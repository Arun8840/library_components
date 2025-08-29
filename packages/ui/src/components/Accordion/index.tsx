import AccordionContent from "./Accordion-content";
import AccordionItem from "./Accordion-item";
import AccordionRoot from "./Accordion-root";
import AccordionTrigger from "./Accordion-trigger";

const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
});

export { Accordion };
