"use client";

import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAppState } from "../../../../components/app-provider";
import { DashboardShell } from "../../../../components/dashboard-shell";

function EditInvoicePageInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const invoiceId = searchParams.get("id");
  const { clients, invoices, updateInvoice } = useAppState();
  const invoice = invoices.find((item) => item.id === invoiceId);

  const [form, setForm] = useState({
    client: "",
    invoice: "",
    issued: "",
    due: "",
    amount: "",
    state: "Pending",
    summary: "",
  });

  useEffect(() => {
    if (!invoice) {
      return;
    }

    setForm({
      client: invoice.client ?? "",
      invoice: invoice.invoice ?? "",
      issued: invoice.issued ?? "",
      due: invoice.due ?? "",
      amount: invoice.amount ?? "",
      state: invoice.state ?? "Pending",
      summary: invoice.summary ?? "",
    });
  }, [invoice]);

  if (!invoice) {
    return (
      <DashboardShell
        eyebrow="Invoices"
        title="Invoice not found."
        description="The record could not be loaded from the local demo state."
        actions={<Link href="/dashboard/invoices" className="button">Back to invoices</Link>}
      >
        <section className="panel">
          <p className="muted">Try returning to the invoice list and selecting another record.</p>
        </section>
      </DashboardShell>
    );
  }

  return (
    <DashboardShell
      eyebrow="Invoices"
      title={`Edit ${invoice.invoice}.`}
      description="This edit route rounds out the billing workflow and makes the invoice UI feel much more complete."
      actions={<Link href="/dashboard/invoices" className="button button-ghost">Back to invoices</Link>}
    >
      <section className="form-page-grid">
        <article className="panel panel-wide">
          <div className="panel-head">
            <div>
              <p className="mini-label">Edit</p>
              <h2>Invoice details</h2>
            </div>
          </div>
          <form
            className="app-form"
            onSubmit={(event) => {
              event.preventDefault();
              updateInvoice(invoice.id, form);
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
                  type="date"
                  value={form.issued}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, issued: event.target.value }))
                  }
                />
              </label>
              <label>
                <span>Due date</span>
                <input
                  type="date"
                  value={form.due}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, due: event.target.value }))
                  }
                />
              </label>
            </div>
            <div className="form-grid">
              <label>
                <span>Amount</span>
                <input
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
                Update invoice
              </button>
            </div>
          </form>
        </article>
      </section>
    </DashboardShell>
  );
}

export default function EditInvoicePage() {
  return (
    <Suspense fallback={null}>
      <EditInvoicePageInner />
    </Suspense>
  );
}
