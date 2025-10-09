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
  { label: "Bubble Chart" },
  { label: "Waterfall Chart" },
  { label: "Indicator Chart" },
  { label: "HeatMap Chart" },
  { label: "Candle-Stick Chart" },
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
    marker: { color: "orangered" },
  },
  {
    x: ["apples", "bananas", "oranges"],
    y: [20, 14, 23],
    name: "Nuts",
    type: "scatter",
    marker: { color: "black" },
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
    error_y: {
      type: "data",
      symmetric: false,
      array: [0.1, 0.2, 0.1, 0.1],
      arrayminus: [0.2, 0.4, 1, 0.2],
    },
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

export const bubbleChartData = [
  {
    x: [1, 2, 3, 4],
    y: [10, 11, 12, 13],
    mode: "markers",
    marker: {
      size: [40, 60, 80, 100],
    },
  },
];

export const waterfallChartData = [
  {
    name: "2018",
    type: "waterfall",
    orientation: "v",
    measure: ["relative", "relative", "total", "relative", "relative", "total"],
    x: [
      "Sales",
      "Consulting",
      "Net revenue",
      "Purchases",
      "Other expenses",
      "Profit before tax",
    ],
    textposition: "outside",
    text: ["+60", "+80", "", "-40", "-20", "Total"],
    y: [60, 80, 0, -40, -20, 0],
    connector: {
      line: {
        color: "rgb(63, 63, 63)",
      },
    },
  },
];

export const indicatorChartData = [
  {
    type: "indicator",
    mode: "number+gauge+delta",
    gauge: { axis: { range: [null, 500] } },
    delta: { reference: 300 },
    value: 220,
    domain: { x: [0, 1], y: [0, 1] },
    title: { text: "Profit" },
  },
];

export const heatMapData = [
  {
    z: [
      [1, null, 30, 50, 1],
      [20, 1, 60, 80, 30],
      [30, 60, 1, -10, 20],
    ],
    x: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    y: ["Morning", "Afternoon", "Evening"],
    type: "heatmap",
    hoverongaps: false,
  },
];

const trace1 = {
  x: [
    "2017-01-04",
    "2017-01-05",
    "2017-01-06",
    "2017-01-09",
    "2017-01-10",
    "2017-01-11",
    "2017-01-12",
    "2017-01-13",
    "2017-01-17",
    "2017-01-18",
    "2017-01-19",
    "2017-01-20",
    "2017-01-23",
    "2017-01-24",
    "2017-01-25",
    "2017-01-26",
    "2017-01-27",
    "2017-01-30",
    "2017-01-31",
    "2017-02-01",
    "2017-02-02",
    "2017-02-03",
    "2017-02-06",
    "2017-02-07",
    "2017-02-08",
    "2017-02-09",
    "2017-02-10",
    "2017-02-13",
    "2017-02-14",
    "2017-02-15",
  ],

  close: [
    116.019997, 116.610001, 117.910004, 118.989998, 119.110001, 119.75, 119.25,
    119.040001, 120, 119.989998, 119.779999, 120, 120.080002, 119.970001,
    121.879997, 121.940002, 121.949997, 121.629997, 121.349998, 128.75,
    128.529999, 129.080002, 130.289993, 131.529999, 132.039993, 132.419998,
    132.119995, 133.289993, 135.020004, 135.509995,
  ],

  decreasing: { line: { color: "#7F7F7F" } },

  high: [
    116.510002, 116.860001, 118.160004, 119.43, 119.379997, 119.93, 119.300003,
    119.620003, 120.239998, 120.5, 120.089996, 120.449997, 120.809998,
    120.099998, 122.099998, 122.440002, 122.349998, 121.629997, 121.389999,
    130.490005, 129.389999, 129.190002, 130.5, 132.089996, 132.220001,
    132.449997, 132.940002, 133.820007, 135.089996, 136.270004,
  ],

  increasing: { line: { color: "#17BECF" } },

  line: { color: "rgba(31,119,180,1)" },

  low: [
    115.75, 115.809998, 116.470001, 117.940002, 118.300003, 118.599998,
    118.209999, 118.809998, 118.220001, 119.709999, 119.370003, 119.730003,
    119.769997, 119.5, 120.279999, 121.599998, 121.599998, 120.660004,
    120.620003, 127.010002, 127.779999, 128.160004, 128.899994, 130.449997,
    131.220001, 131.119995, 132.050003, 132.75, 133.25, 134.619995,
  ],

  open: [
    115.849998, 115.919998, 116.779999, 117.949997, 118.769997, 118.739998,
    118.900002, 119.110001, 118.339996, 120, 119.400002, 120.449997, 120,
    119.550003, 120.419998, 121.669998, 122.139999, 120.93, 121.150002,
    127.029999, 127.980003, 128.309998, 129.130005, 130.539993, 131.350006,
    131.649994, 132.460007, 133.080002, 133.470001, 135.520004,
  ],

  type: "candlestick",
  xaxis: "x",
  yaxis: "y",
};

export const candleStickData = [trace1];
