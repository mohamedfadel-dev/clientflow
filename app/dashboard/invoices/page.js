"use client";

import Link from "next/link";
import { DashboardShell } from "../../../components/dashboard-shell";
import { useAppState } from "../../../components/app-provider";
import { StatusBadge } from "../../../components/status-badge";

export default function InvoicesPage() {
  const { invoices } = useAppState();

  return (
    <DashboardShell
      eyebrow="Invoices"
      title="Cash flow and payment state."
      description="A simple but credible billing surface with enough structure to feel like real product UI."
      actions={
        <>
          <button className="button button-ghost">Send reminders</button>
          <Link href="/dashboard/invoices/new" className="button">
            Create invoice
          </Link>
        </>
      }
    >
      <section className="dashboard-grid dashboard-grid-clients">
        <article className="panel panel-wide">
          <div className="panel-head">
            <div>
              <p className="mini-label">Billing</p>
              <h2>Recent invoices</h2>
            </div>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Invoice</th>
                  <th>Client</th>
                  <th>Issued</th>
                  <th>Status</th>
                  <th>Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice) => (
                  <tr key={invoice.invoice}>
                    <td>{invoice.invoice}</td>
                    <td>{invoice.client}</td>
                    <td>{invoice.issued}</td>
                    <td>
                      <StatusBadge status={invoice.state} />
                    </td>
                    <td>{invoice.amount}</td>
                    <td>
                      <Link
                        href={`/dashboard/invoices/edit?id=${invoice.id}`}
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
              <p className="mini-label">Summary</p>
              <h2>Accounts receivable</h2>
            </div>
          </div>
          <div className="stack-list">
            <article className="stack-card">
              <strong>$10.6k pending</strong>
              <p>Invoices issued this month that have not closed yet.</p>
            </article>
            <article className="stack-card">
              <strong>$1.9k overdue</strong>
              <p>One account needs immediate follow-up before the next milestone.</p>
            </article>
            <article className="stack-card">
              <strong>$18.2k collected</strong>
              <p>Healthy close rate for the current operating cycle.</p>
            </article>
          </div>
        </article>
      </section>
    </DashboardShell>
  );
}
