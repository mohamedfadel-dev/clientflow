import Link from "next/link";

const stats = [
  { value: "128", label: "active clients" },
  { value: "$84k", label: "open invoices" },
  { value: "17", label: "projects in delivery" },
];

const pillars = [
  {
    title: "Clients and projects in one place",
    body:
      "Track every client, proposal, deliverable, and deadline without bouncing between scattered docs and spreadsheets.",
  },
  {
    title: "A dashboard that feels like a product",
    body:
      "Built to showcase polished React and Next.js work: responsive layouts, status systems, data-dense UI, and strong visual rhythm.",
  },
  {
    title: "Ready to grow into a real full-stack app",
    body:
      "The UI is shaped as a real SaaS product so the next steps are natural: auth, database models, server actions, and seeded demo data.",
  },
];

const workflow = [
  "Capture new leads and convert them into active clients",
  "Track projects across kickoff, review, and delivery",
  "Manage invoices, payment state, and account health",
  "Give clients a clean portal instead of messy email threads",
];

export default function HomePage() {
  return (
    <main className="shell">
      <header className="topbar">
        <Link href="/" className="brand">
          <span className="brand-mark">CF</span>
          <span>ClientFlow</span>
        </Link>
        <nav className="topnav">
          <a href="#features">Features</a>
          <a href="#workflow">Workflow</a>
          <a href="#preview">Preview</a>
          <Link href="/login">Sign in</Link>
          <Link href="/dashboard" className="button button-ghost">
            Open Demo
          </Link>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Next.js portfolio project</p>
          <h1>A client portal that looks like real product work.</h1>
          <p className="hero-text">
            ClientFlow is the project I am building to anchor a React and
            Next.js portfolio around something more serious than a toy app. It
            sits between CRM, project tracker, and invoicing workspace.
          </p>
          <div className="hero-actions">
            <Link href="/dashboard" className="button">
              View dashboard preview
            </Link>
            <Link href="/signup" className="button button-ghost">
              Create workspace
            </Link>
            <a href="#features" className="button button-ghost">
              Explore the system
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="window-bar">
            <span />
            <span />
            <span />
          </div>
          <div className="hero-panel">
            <div className="hero-panel-top">
              <div>
                <p className="mini-label">Today</p>
                <h2>Operations overview</h2>
              </div>
              <span className="status-pill">Healthy delivery week</span>
            </div>
            <div className="stat-grid">
              {stats.map((stat) => (
                <article key={stat.label} className="stat-card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
            <div className="mini-board">
              <article>
                <p>Review queue</p>
                <strong>Website redesign</strong>
                <span>Feedback due in 4h</span>
              </article>
              <article>
                <p>Invoice activity</p>
                <strong>3 payments landed</strong>
                <span>2 awaiting approval</span>
              </article>
              <article>
                <p>Client health</p>
                <strong>11 on track</strong>
                <span>1 needs attention</span>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="features">
        <div className="section-heading">
          <p className="eyebrow">Why this project works</p>
          <h2>Built to showcase polished frontend thinking.</h2>
        </div>
        <div className="feature-grid">
          {pillars.map((pillar) => (
            <article className="feature-card" key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split" id="workflow">
        <div className="section-heading">
          <p className="eyebrow">Core workflow</p>
          <h2>A shape that can grow into a real SaaS app.</h2>
        </div>
        <div className="workflow-list">
          {workflow.map((item, index) => (
            <article className="workflow-item" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section preview" id="preview">
        <div className="section-heading">
          <p className="eyebrow">Preview</p>
          <h2>The dashboard route is where the product UI starts.</h2>
          <p>
            The landing page sells the product. The dashboard proves the UI can
            carry real structure.
          </p>
        </div>
        <Link href="/dashboard" className="button">
          Open dashboard
        </Link>
      </section>
    </main>
  );
}
