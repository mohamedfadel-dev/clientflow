"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppState } from "../../../../components/app-provider";
import { DashboardShell } from "../../../../components/dashboard-shell";

export default function NewClientPage() {
  const router = useRouter();
  const { addClient, user } = useAppState();
  const [form, setForm] = useState({
    name: "",
    contact: "",
    email: "",
    owner: user?.name ?? "Mohamed Fadel",
    stage: "Proposal",
    value: "",
    notes: "",
  });

  return (
    <DashboardShell
      eyebrow="Clients"
      title="Add a new client."
      description="A first CRUD-style form that makes the app feel much closer to a working product."
      actions={<Link href="/dashboard/clients" className="button button-ghost">Back to clients</Link>}
    >
      <section className="form-page-grid">
        <article className="panel panel-wide">
          <div className="panel-head">
            <div>
              <p className="mini-label">Create</p>
              <h2>Client profile</h2>
            </div>
          </div>
          <form
            className="app-form"
            onSubmit={(event) => {
              event.preventDefault();
              addClient({
                name: form.name,
                contact: form.contact,
                email: form.email,
                owner: form.owner,
                stage: form.stage,
                value: form.value || "$0",
                notes: form.notes,
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
                  placeholder="Northstar Studio"
                  value={form.name}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, name: event.target.value }))
                  }
                />
              </label>
              <label>
                <span>Primary contact</span>
                <input
                  placeholder="Maya Chen"
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
                  placeholder="maya@northstar.co"
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
                  placeholder="$12,000"
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
                placeholder="Important context, deliverables, meeting cadence, or payment expectations."
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
                Save client
              </button>
            </div>
          </form>
        </article>

        <article className="panel">
          <div className="panel-head">
            <div>
              <p className="mini-label">Tips</p>
              <h2>Good defaults</h2>
            </div>
          </div>
          <div className="stack-list">
            <article className="stack-card">
              <strong>Keep stages simple</strong>
              <p>A small stage system reads better in a dashboard than an overdesigned workflow taxonomy.</p>
            </article>
            <article className="stack-card">
              <strong>Capture value early</strong>
              <p>Even a rough estimate helps make the financial UI feel more realistic later.</p>
            </article>
          </div>
        </article>
      </section>
    </DashboardShell>
  );
}
