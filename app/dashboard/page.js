"use client";

import { DashboardShell } from "../../components/dashboard-shell";
import { StatusBadge } from "../../components/status-badge";
import { useAppState } from "../../components/app-provider";

function parseAmount(value) {
  return Number(value.replace(/[$,k]/g, "")) * (value.includes("k") ? 1000 : 1);
}

export default function DashboardPage() {
  const { clients, invoices, projects, tasks, user } = useAppState();

  const pendingInvoices = invoices.filter((invoice) => invoice.state === "Pending").length;
  const totalPaid = invoices
    .filter((invoice) => invoice.state === "Paid")
    .reduce((sum, invoice) => sum + parseAmount(invoice.amount), 0);

  const overviewStats = [
    {
      label: "Monthly revenue",
      value: `$${Math.round(totalPaid).toLocaleString()}`,
      delta: "+8%",
    },
    {
      label: "Invoices awaiting payment",
      value: String(pendingInvoices),
      delta: `${invoices.filter((invoice) => invoice.state === "Overdue").length} overdue`,
    },
    {
      label: "Projects in progress",
      value: String(projects.length),
      delta: `${clients.length} active clients`,
    },
  ];

  return (
    <DashboardShell
      eyebrow="Dashboard"
      title={`Good morning, ${user?.name ?? "there"}.`}
      description="A clean overview of delivery, client health, and payment activity."
      actions={
        <>
          <button className="button button-ghost">Export report</button>
          <button className="button">New client</button>
        </>
      }
    >
      <section className="dashboard-grid dashboard-grid-top">
        {overviewStats.map((card) => (
          <article className="panel metric-panel" key={card.label}>
            <span>{card.label}</span>
            <strong>{card.value}</strong>
            <em>{card.delta} vs last month</em>
          </article>
        ))}
      </section>

      <section className="dashboard-grid">
        <article className="panel panel-wide">
          <div className="panel-head">
            <div>
              <p className="mini-label">Accounts</p>
              <h2>Client health</h2>
            </div>
            <button className="text-button">View all</button>
          </div>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Client</th>
                  <th>Stage</th>
                  <th>Status</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client) => (
                  <tr key={client.name}>
                    <td>{client.name}</td>
                    <td>{client.stage}</td>
                    <td>
                      <StatusBadge status={client.status} />
                    </td>
                    <td>{client.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className="panel">
          <div className="panel-head">
            <div>
              <p className="mini-label">Today</p>
              <h2>Priority tasks</h2>
            </div>
          </div>
          <div className="task-list">
            {tasks.map((task) => (
              <article className="task-card" key={task.title}>
                <div>
                  <strong>{task.title}</strong>
                  <p>{task.team}</p>
                </div>
                <span>{task.due}</span>
              </article>
            ))}
          </div>
        </article>
      </section>
    </DashboardShell>
  );
}
