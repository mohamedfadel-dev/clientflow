export const initialOverviewStats = [
  { label: "Monthly revenue", value: "$24,800", delta: "+12%" },
  { label: "Invoices awaiting payment", value: "14", delta: "-3%" },
  { label: "Projects in progress", value: "9", delta: "+2" },
];

export const initialClients = [
  {
    id: "client-1",
    name: "Northstar Studio",
    status: "On track",
    value: "$12.4k",
    stage: "Design system",
    owner: "Maya Chen",
    health: "Strong",
    contact: "Maya Chen",
    email: "maya@northstar.co",
    notes: "Long-term design systems partner with strong communication cadence.",
  },
  {
    id: "client-2",
    name: "Fieldlane",
    status: "Review",
    value: "$8.1k",
    stage: "Portal delivery",
    owner: "Ethan Ross",
    health: "Watch",
    contact: "Ethan Ross",
    email: "ethan@fieldlane.io",
    notes: "Project is close to complete but feedback rounds are getting tighter.",
  },
  {
    id: "client-3",
    name: "Arbor Health",
    status: "At risk",
    value: "$4.8k",
    stage: "Invoice follow-up",
    owner: "Lina Omar",
    health: "Urgent",
    contact: "Lina Omar",
    email: "lina@arborhealth.com",
    notes: "Needs clearer milestone framing and payment follow-up.",
  },
  {
    id: "client-4",
    name: "Motive Labs",
    status: "On track",
    value: "$15.7k",
    stage: "Analytics rollout",
    owner: "Noah Bright",
    health: "Strong",
    contact: "Noah Bright",
    email: "noah@motive.dev",
    notes: "Healthy account with room to extend scope into reporting automation.",
  },
];

export const initialTasks = [
  { title: "Finalize onboarding flow", team: "Product", due: "Today" },
  { title: "Approve invoice batch", team: "Finance", due: "Tomorrow" },
  { title: "Deliver client handoff deck", team: "Account", due: "Thu" },
];

export const initialProjects = [
  {
    id: "project-1",
    name: "Northstar redesign",
    phase: "Build",
    due: "Apr 22",
    progress: "78%",
    owner: "Maya",
  },
  {
    id: "project-2",
    name: "Fieldlane portal",
    phase: "Review",
    due: "Apr 18",
    progress: "92%",
    owner: "Ethan",
  },
  {
    id: "project-3",
    name: "Arbor analytics",
    phase: "Kickoff",
    due: "Apr 29",
    progress: "21%",
    owner: "Lina",
  },
  {
    id: "project-4",
    name: "Motive reporting hub",
    phase: "Strategy",
    due: "May 03",
    progress: "36%",
    owner: "Noah",
  },
];

export const initialInvoices = [
  {
    id: "invoice-1",
    invoice: "INV-1042",
    client: "Northstar Studio",
    amount: "$4,800",
    state: "Paid",
    issued: "Apr 02",
    due: "Apr 16",
    summary: "Design system implementation and responsive UI kit delivery.",
  },
  {
    id: "invoice-2",
    invoice: "INV-1047",
    client: "Fieldlane",
    amount: "$3,250",
    state: "Pending",
    issued: "Apr 07",
    due: "Apr 21",
    summary: "Portal finalization and review support.",
  },
  {
    id: "invoice-3",
    invoice: "INV-1051",
    client: "Arbor Health",
    amount: "$1,950",
    state: "Overdue",
    issued: "Mar 28",
    due: "Apr 11",
    summary: "Analytics kickoff and reporting structure.",
  },
  {
    id: "invoice-4",
    invoice: "INV-1054",
    client: "Motive Labs",
    amount: "$5,400",
    state: "Pending",
    issued: "Apr 10",
    due: "Apr 24",
    summary: "Reporting hub planning and dashboard system prep.",
  },
];

export const initialSettingsGroups = [
  {
    title: "Workspace",
    body: "Branding, default currency, invoice numbering, and internal workspace identity.",
  },
  {
    title: "Notifications",
    body: "Control reminders for payment follow-ups, delivery reviews, and project deadlines.",
  },
  {
    title: "Team access",
    body: "Manage roles for account managers, designers, developers, and finance reviewers.",
  },
];

export const initialWorkspace = {
  name: "ClientFlow Studio",
  currency: "USD",
  purpose: "Freelance client management, delivery tracking, and invoicing.",
  onboardingComplete: false,
};

export function cloneInitialData() {
  return {
    workspace: { ...initialWorkspace },
    clients: initialClients.map((item) => ({ ...item })),
    invoices: initialInvoices.map((item) => ({ ...item })),
    projects: initialProjects.map((item) => ({ ...item })),
    tasks: initialTasks.map((item) => ({ ...item })),
  };
}
