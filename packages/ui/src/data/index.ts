export const defaultNavItems = [
  {
    label: "Home",
    href: "/",
    icon: "🏠",
  },
  {
    label: "About",
    href: "#",
    icon: "ℹ️",
  },
  {
    label: "Services",
    href: "#",
    icon: "🛠️",
  },
  {
    label: "Contact",
    href: "/#",
    icon: "✉️",
  },
];

export const defaultNavActions = [
  {
    label: "Login",
    href: "#",
    variant: "primary",
  },
  {
    label: "Sign-up",
    href: "#",
    variant: "secondary",
  },
];
export const timelineData = [
  {
    title: "Project Kickoff",
    description:
      "The team met to discuss project goals, deliverables, and timelines. Roles were assigned and initial requirements were gathered.",
  },
  {
    title: "First Prototype Released",
    description:
      "The initial prototype was completed and shared with stakeholders for feedback. Early testing identified key areas for improvement.",
  },
  {
    title: "Beta Launch",
    description:
      "A beta version was launched to a limited audience. Feedback was collected and used to fix bugs and enhance features.",
  },
  {
    title: "Public Release",
    description:
      "The project was released to the public. Ongoing support and updates are planned based on user feedback.",
  },
];

export const defaultDropdownItems = [
  { key: "item1", value: "Item 1" },
  { key: "item2", value: "Item 2" },
  { key: "item3", value: "Item 3" },
];

export const tabData = [
  { label: "Bar Chart" },
  { label: "Line Chart" },
  { label: "Pie Chart" },
  { label: "Buttons" },
  { label: "Inputs" },
  { label: "Checkboxes" },
  { label: "Radio" },
  { label: "Avatar" },
  { label: "Card" },
  { label: "Accordion" },
  { label: "Dropdown" },
  { label: "Badge" },
  { label: "Dialog" },
  { label: "Toggle Group" },
  { label: "Slider" },
  { label: "Carousel" },
  { label: "Tooltip" },
  { label: "Timeline" },
  { label: "File Uploader" },
  { label: "Switch" },
  { label: "Stepper" },
  { label: "Url" },
  { label: "Tree" },
  { label: "Table" },
  { label: "Divider" },
  { label: "Bread crums" },
];

export const treeData = [
  {
    groupLabel: "Landing page",
    items: [
      { label: "Hero Section" },
      { label: "Call to Action" },
      { label: "Testimonials" },
    ],
  },
  {
    groupLabel: "About section",
    items: [{ label: "Our Mission" }, { label: "Team" }, { label: "History" }],
  },
  {
    groupLabel: "Features",
    items: [
      { label: "Real-time Collaboration" },
      { label: "Customizable Themes" },
      { label: "Analytics Dashboard" },
    ],
  },
];

export const tableData = [
  {
    invoice: "INV-001",
    status: "Paid",
    method: "Credit Card",
    amount: "$250.00",
  },
  {
    invoice: "INV-002",
    status: "Pending",
    method: "PayPal",
    amount: "$150.00",
  },
  {
    invoice: "INV-003",
    status: "Overdue",
    method: "Bank Transfer",
    amount: "$500.00",
  },
  {
    invoice: "INV-004",
    status: "Paid",
    method: "Credit Card",
    amount: "$320.00",
  },
  {
    invoice: "INV-005",
    status: "Refunded",
    method: "PayPal",
    amount: "$75.00",
  },
];

export const usersData = [
  { id: "1", name: "John", email: "john@email.com", status: "active" },
  { id: "2", name: "Jane", email: "jane@email.com", status: "inactive" },
  { id: "3", name: "Sam", email: "sam@email.com", status: "active" },
  { id: "4", name: "Alex", email: "alex@email.com", status: "inactive" },
  { id: "5", name: "Emily", email: "emily@email.com", status: "active" },
  { id: "6", name: "Michael", email: "michael@email.com", status: "inactive" },
  { id: "7", name: "Olivia", email: "olivia@email.com", status: "active" },
  { id: "8", name: "David", email: "david@email.com", status: "inactive" },
  { id: "9", name: "Sophia", email: "sophia@email.com", status: "active" },
  { id: "10", name: "Daniel", email: "daniel@email.com", status: "inactive" },
  { id: "11", name: "Grace", email: "grace@email.com", status: "active" },
  { id: "12", name: "Liam", email: "liam@email.com", status: "inactive" },
  { id: "13", name: "Ava", email: "ava@email.com", status: "active" },
  { id: "14", name: "Noah", email: "noah@email.com", status: "inactive" },
];

export const barchartData = [
  {
    x: ["apples", "bananas", "oranges"],
    y: [12, 18, 29],
    name: "Fruits",
    type: "bar",
    marker: { color: "#FF731D" },
  },
  {
    x: ["apples", "bananas", "oranges"],
    y: [20, 14, 23],
    name: "Nuts",
    type: "bar",
    marker: { color: "#C2A68C" },
  },
];

export const linechartData = [
  {
    x: ["apples", "bananas", "oranges"],
    y: [12, 18, 29],
    name: "Fruits",
    type: "scatter",
    marker: { color: "#FF731D" },
  },
  {
    x: ["apples", "bananas", "oranges"],
    y: [20, 14, 23],
    name: "Nuts",
    type: "scatter",
    marker: { color: "#C2A68C" },
  },
];

export const piechartData = [
  {
    type: "pie",
    values: [12, 18, 29, 20, 14, 23],
    labels: [
      "Apples (Fruits)",
      "Bananas (Fruits)",
      "Oranges (Fruits)",
      "Apples (Nuts)",
      "Bananas (Nuts)",
      "Oranges (Nuts)",
    ],
    textinfo: "label+percent",
    textposition: "outside",
    automargin: true,
  },
];
