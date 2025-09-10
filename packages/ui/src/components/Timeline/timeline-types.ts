export interface TimelineRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export interface TimelineItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  order?: number | string;
}

export interface TimelineTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode;
}

export interface TimelineDescriptionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
