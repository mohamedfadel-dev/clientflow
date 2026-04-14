"use client";

import { DashboardShell } from "../../../components/dashboard-shell";
import { useAppState } from "../../../components/app-provider";
import { initialSettingsGroups as settingsGroups } from "../../../lib/demo-data";

export default function SettingsPage() {
  const { workspace } = useAppState();

  return (
    <DashboardShell
      eyebrow="Settings"
      title="Workspace rules and preferences."
      description="A settings surface that rounds out the product and makes the dashboard feel complete."
      actions={<button className="button">Save changes</button>}
    >
      <section className="panel environment-panel">
        <div className="panel-head">
          <div>
            <p className="mini-label">Runtime</p>
            <h2>Environment mode</h2>
          </div>
        </div>
        <p className="muted">
          ClientFlow is currently running in <strong>{workspace.onboardingComplete ? "active" : "setup"}</strong>{" "}
          workspace state. The app itself is structured to support demo mode now and Supabase mode next.
        </p>
      </section>
      <section className="settings-grid">
        {settingsGroups.map((group) => (
          <article className="panel settings-panel" key={group.title}>
            <div className="panel-head">
              <div>
                <p className="mini-label">Configuration</p>
                <h2>{group.title}</h2>
              </div>
            </div>
            <p className="muted">{group.body}</p>
            <div className="settings-fields">
              <label>
                <span>Primary value</span>
                <input defaultValue={group.title === "Workspace" ? workspace.name : group.title} />
              </label>
              <label>
                <span>Secondary value</span>
                <input
                  defaultValue={
                    group.title === "Workspace" ? workspace.currency : "Enabled"
                  }
                />
              </label>
            </div>
          </article>
        ))}
      </section>
    </DashboardShell>
  );
}
