import { TimelineDescription } from "./timeline-description";
import { TimelineItem } from "./timeline-item";
import TimelineRoot from "./timeline-root";
import { TimelineTitle } from "./timeline-title";

const Timeline = Object.assign(TimelineRoot, {
  Item: TimelineItem,
  Title: TimelineTitle,
  Description: TimelineDescription,
});

export { Timeline };
