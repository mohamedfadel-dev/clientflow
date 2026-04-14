import { DashboardShell } from "../../../components/dashboard-shell";
import { initialProjects as projects } from "../../../lib/demo-data";

export default function ProjectsPage() {
  return (
    <DashboardShell
      eyebrow="Projects"
      title="Delivery pipeline at a glance."
      description="A project view that feels closer to an internal product than a static portfolio mockup."
      actions={
        <>
          <button className="button button-ghost">Timeline view</button>
          <button className="button">Create project</button>
        </>
      }
    >
      <section className="kanban-grid">
        <article className="panel kanban-column">
          <div className="panel-head">
            <h2>Strategy</h2>
            <span className="column-count">1</span>
          </div>
          {projects
            .filter((project) => project.phase === "Strategy")
            .map((project) => (
              <article className="kanban-card" key={project.name}>
                <strong>{project.name}</strong>
                <p>Owner: {project.owner}</p>
                <span>Due {project.due}</span>
              </article>
            ))}
        </article>

        <article className="panel kanban-column">
          <div className="panel-head">
            <h2>Build</h2>
            <span className="column-count">1</span>
          </div>
          {projects
            .filter((project) => project.phase === "Build")
            .map((project) => (
              <article className="kanban-card" key={project.name}>
                <strong>{project.name}</strong>
                <p>Progress: {project.progress}</p>
                <span>Due {project.due}</span>
              </article>
            ))}
        </article>

        <article className="panel kanban-column">
          <div className="panel-head">
            <h2>Review</h2>
            <span className="column-count">1</span>
          </div>
          {projects
            .filter((project) => project.phase === "Review")
            .map((project) => (
              <article className="kanban-card" key={project.name}>
                <strong>{project.name}</strong>
                <p>Progress: {project.progress}</p>
                <span>Due {project.due}</span>
              </article>
            ))}
        </article>

        <article className="panel kanban-column">
          <div className="panel-head">
            <h2>Kickoff</h2>
            <span className="column-count">1</span>
          </div>
          {projects
            .filter((project) => project.phase === "Kickoff")
            .map((project) => (
              <article className="kanban-card" key={project.name}>
                <strong>{project.name}</strong>
                <p>Progress: {project.progress}</p>
                <span>Due {project.due}</span>
              </article>
            ))}
        </article>
      </section>
    </DashboardShell>
  );
}
