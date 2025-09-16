import { cn } from "../../lib/utils";
import { TimelineItemProps } from "./timeline-types";

const baseClass =
  "relative border border-gray-200 p-3 bg-[var(--card)] shadow-lg rounded-lg ";
export const TimelineItem: React.FC<TimelineItemProps> = ({
  children,
  className,
  order,
}) => {
  return (
    <div className={cn(baseClass, className)}>
      {children}

      {/* //* pointer */}
      <div className="grid place-items-center absolute -left-12 top-1/2 -translate-y-1/2 size-8 bg-[var(--card)] border border-gray-200 rounded-full shadow-md">
        {order == null ? "✨" : order}
      </div>
    </div>
  );
};

TimelineItem.displayName = "TimelineItem";
