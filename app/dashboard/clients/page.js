"use client";

import Link from "next/link";
import { DashboardShell } from "../../../components/dashboard-shell";
import { useAppState } from "../../../components/app-provider";
import { StatusBadge } from "../../../components/status-badge";

export default function ClientsPage() {
  const { clients } = useAppState();

  return (
    <DashboardShell
      eyebrow="Clients"
      title="Accounts and relationship health."
      description="A focused list view for tracking project stage, account owner, and current risk."
      actions={
        <>
          <button className="button button-ghost">Import CSV</button>
          <Link href="/dashboard/clients/new" className="button">
            Add client
          </Link>
        </>
      }
    >
      <section className="dashboard-grid dashboard-grid-clients">
        <article className="panel panel-wide">
          <div className="panel-head">
            <div>
              <p className="mini-label">Directory</p>
              <h2>Client list</h2>
            </div>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Client</th>
                  <th>Owner</th>
                  <th>Stage</th>
                  <th>Delivery</th>
                  <th>Health</th>
                  <th>Value</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client) => (
                  <tr key={client.name}>
                    <td>{client.name}</td>
                    <td>{client.owner}</td>
                    <td>{client.stage}</td>
                    <td>
                      <StatusBadge status={client.status} />
                    </td>
                    <td>
                      <StatusBadge status={client.health} />
                    </td>
                    <td>{client.value}</td>
                    <td>
                      <Link
                        href={`/dashboard/clients/edit?id=${client.id}`}
                        className="table-link"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className="panel">
          <div className="panel-head">
            <div>
              <p className="mini-label">Snapshot</p>
              <h2>Account notes</h2>
            </div>
          </div>
          <div className="stack-list">
            <article className="stack-card">
              <strong>Northstar Studio</strong>
              <p>Cleanest account in the system. Good candidate for a portal case study.</p>
            </article>
            <article className="stack-card">
              <strong>Fieldlane</strong>
              <p>Delivery is nearly complete, but review feedback is still compressing the schedule.</p>
            </article>
            <article className="stack-card">
              <strong>Arbor Health</strong>
              <p>Needs payment follow-up and clearer milestone framing before the next sprint.</p>
            </article>
          </div>
        </article>
      </section>
    </DashboardShell>
  );
}
