"use client";

import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAppState } from "../../../../components/app-provider";
import { DashboardShell } from "../../../../components/dashboard-shell";

function EditClientPageInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const clientId = searchParams.get("id");
  const { clients, updateClient } = useAppState();
  const client = clients.find((item) => item.id === clientId);

  const [form, setForm] = useState({
    name: "",
    contact: "",
    email: "",
    owner: "",
    stage: "Proposal",
    value: "",
    notes: "",
  });

  useEffect(() => {
    if (!client) {
      return;
    }

    setForm({
      name: client.name ?? "",
      contact: client.contact ?? "",
      email: client.email ?? "",
      owner: client.owner ?? "",
      stage: client.stage ?? "Proposal",
      value: client.value ?? "",
      notes: client.notes ?? "",
    });
  }, [client]);

  if (!client) {
    return (
      <DashboardShell
        eyebrow="Clients"
        title="Client not found."
        description="The record could not be loaded from the local demo state."
        actions={<Link href="/dashboard/clients" className="button">Back to clients</Link>}
      >
        <section className="panel">
          <p className="muted">Try returning to the client list and selecting another record.</p>
        </section>
      </DashboardShell>
    );
  }

  return (
    <DashboardShell
      eyebrow="Clients"
      title={`Edit ${client.name}.`}
      description="A simple edit surface to prove the product can move beyond one-way mock data."
      actions={<Link href="/dashboard/clients" className="button button-ghost">Back to clients</Link>}
    >
      <section className="form-page-grid">
        <article className="panel panel-wide">
          <div className="panel-head">
            <div>
              <p className="mini-label">Edit</p>
              <h2>Client profile</h2>
            </div>
          </div>
          <form
            className="app-form"
            onSubmit={(event) => {
              event.preventDefault();
              updateClient(client.id, {
                ...form,
                status: form.stage === "Review" ? "Review" : "On track",
                health: form.stage === "Proposal" ? "Watch" : "Strong",
              });
              router.push("/dashboard/clients");
            }}
          >
            <div className="form-grid">
              <label>
                <span>Client name</span>
                <input
                  value={form.name}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, name: event.target.value }))
                  }
                />
              </label>
              <label>
                <span>Primary contact</span>
                <input
                  value={form.contact}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, contact: event.target.value }))
                  }
                />
              </label>
            </div>
            <div className="form-grid">
              <label>
                <span>Email</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, email: event.target.value }))
                  }
                />
              </label>
              <label>
                <span>Account owner</span>
                <input
                  value={form.owner}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, owner: event.target.value }))
                  }
                />
              </label>
            </div>
            <div className="form-grid">
              <label>
                <span>Project stage</span>
                <select
                  value={form.stage}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, stage: event.target.value }))
                  }
                >
                  <option>Proposal</option>
                  <option>Kickoff</option>
                  <option>Build</option>
                  <option>Review</option>
                </select>
              </label>
              <label>
                <span>Estimated value</span>
                <input
                  value={form.value}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, value: event.target.value }))
                  }
                />
              </label>
            </div>
            <label>
              <span>Notes</span>
              <textarea
                rows="5"
                value={form.notes}
                onChange={(event) =>
                  setForm((current) => ({ ...current, notes: event.target.value }))
                }
              />
            </label>
            <div className="form-actions">
              <Link href="/dashboard/clients" className="button button-ghost">
                Cancel
              </Link>
              <button className="button" type="submit">
                Update client
              </button>
            </div>
          </form>
        </article>
      </section>
    </DashboardShell>
  );
}

export default function EditClientPage() {
  return (
    <Suspense fallback={null}>
      <EditClientPageInner />
    </Suspense>
  );
}
