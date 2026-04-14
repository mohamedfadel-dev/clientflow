"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppState } from "../../../../components/app-provider";
import { DashboardShell } from "../../../../components/dashboard-shell";

export default function NewInvoicePage() {
  const router = useRouter();
  const { addInvoice, clients, invoices } = useAppState();
  const nextInvoiceNumber = useMemo(
    () => `INV-${1058 + invoices.length}`,
    [invoices.length]
  );
  const [form, setForm] = useState({
    client: clients[0]?.name ?? "Northstar Studio",
    invoice: nextInvoiceNumber,
    issued: "2026-04-14",
    due: "2026-04-28",
    amount: "",
    state: "Pending",
    summary: "",
  });

  return (
    <DashboardShell
      eyebrow="Invoices"
      title="Create an invoice."
      description="Billing flow is a strong portfolio signal because it shows forms, structure, and business-oriented UI thinking."
      actions={<Link href="/dashboard/invoices" className="button button-ghost">Back to invoices</Link>}
    >
      <section className="form-page-grid">
        <article className="panel panel-wide">
          <div className="panel-head">
            <div>
              <p className="mini-label">Billing</p>
              <h2>Invoice details</h2>
            </div>
          </div>
          <form
            className="app-form"
            onSubmit={(event) => {
              event.preventDefault();
              addInvoice(form);
              router.push("/dashboard/invoices");
            }}
          >
            <div className="form-grid">
              <label>
                <span>Client</span>
                <select
                  value={form.client}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, client: event.target.value }))
                  }
                >
                  {clients.map((client) => (
                    <option key={client.id} value={client.name}>
                      {client.name}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <span>Invoice number</span>
                <input
                  value={form.invoice}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, invoice: event.target.value }))
                  }
                />
              </label>
            </div>
            <div className="form-grid">
              <label>
                <span>Issue date</span>
                <input
                  value={form.issued}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, issued: event.target.value }))
                  }
                  type="date"
                />
              </label>
              <label>
                <span>Due date</span>
                <input
                  value={form.due}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, due: event.target.value }))
                  }
                  type="date"
                />
              </label>
            </div>
            <div className="form-grid">
              <label>
                <span>Amount</span>
                <input
                  placeholder="$4,800"
                  value={form.amount}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, amount: event.target.value }))
                  }
                />
              </label>
              <label>
                <span>Status</span>
                <select
                  value={form.state}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, state: event.target.value }))
                  }
                >
                  <option>Draft</option>
                  <option>Pending</option>
                  <option>Paid</option>
                  <option>Overdue</option>
                </select>
              </label>
            </div>
            <label>
              <span>Line item summary</span>
              <textarea
                rows="5"
                placeholder="Design system implementation, dashboard screens, responsive QA."
                value={form.summary}
                onChange={(event) =>
                  setForm((current) => ({ ...current, summary: event.target.value }))
                }
              />
            </label>
            <div className="form-actions">
              <Link href="/dashboard/invoices" className="button button-ghost">
                Cancel
              </Link>
              <button className="button" type="submit">
                Save invoice
              </button>
            </div>
          </form>
        </article>

        <article className="panel">
          <div className="panel-head">
            <div>
              <p className="mini-label">Notes</p>
              <h2>Why this page matters</h2>
            </div>
          </div>
          <div className="stack-list">
            <article className="stack-card">
              <strong>Business-flavored UI</strong>
              <p>Invoice forms signal product maturity much more strongly than purely decorative pages.</p>
            </article>
            <article className="stack-card">
              <strong>Natural next step</strong>
              <p>This route is ready to connect to a backend once the data layer is introduced.</p>
            </article>
          </div>
        </article>
      </section>
    </DashboardShell>
  );
}
