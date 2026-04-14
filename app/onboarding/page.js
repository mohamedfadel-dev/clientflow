"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppState } from "../../components/app-provider";

const setupSteps = [
  "Name the workspace and choose how you want invoices to look.",
  "Add your first client and set a default project template.",
  "Invite teammates or keep the space solo while you test the flow.",
];

export default function OnboardingPage() {
  const router = useRouter();
  const { ready, user, workspace, completeOnboarding } = useAppState();
  const [workspaceName, setWorkspaceName] = useState(workspace.name);
  const [currency, setCurrency] = useState(workspace.currency);
  const [purpose, setPurpose] = useState(workspace.purpose);

  useEffect(() => {
    if (!ready) {
      return;
    }

    if (!user) {
      router.replace("/login");
      return;
    }

    if (workspace.onboardingComplete) {
      router.replace("/dashboard");
    }
  }, [ready, router, user, workspace.onboardingComplete]);

  return (
    <main className="shell onboarding-shell">
      <header className="topbar">
        <Link href="/" className="brand">
          <span className="brand-mark">CF</span>
          <span>ClientFlow</span>
        </Link>
        <Link href="/dashboard" className="button button-ghost">
          Skip to demo
        </Link>
      </header>

      <section className="section onboarding-grid">
        <div className="section-heading">
          <p className="eyebrow">Onboarding</p>
          <h2>Set up the workspace in one pass.</h2>
          <p>
            This route is here to make the product feel more complete. It turns
            signup into a real journey instead of a disconnected screen.
          </p>
        </div>

        <article className="panel onboarding-panel">
          <div className="panel-head">
            <div>
              <p className="mini-label">Setup</p>
              <h2>Workspace basics</h2>
            </div>
          </div>
          <form
            className="app-form"
            onSubmit={(event) => {
              event.preventDefault();
              completeOnboarding({
                name: workspaceName,
                currency,
                purpose,
              });
              router.push("/dashboard/clients/new");
            }}
          >
            <div className="form-grid">
              <label>
                <span>Workspace name</span>
                <input
                  value={workspaceName}
                  onChange={(event) => setWorkspaceName(event.target.value)}
                />
              </label>
              <label>
                <span>Primary currency</span>
                <select value={currency} onChange={(event) => setCurrency(event.target.value)}>
                  <option>USD</option>
                  <option>EUR</option>
                  <option>GBP</option>
                </select>
              </label>
            </div>
            <label>
              <span>What are you using ClientFlow for?</span>
              <textarea
                rows="4"
                value={purpose}
                onChange={(event) => setPurpose(event.target.value)}
              />
            </label>
            <div className="form-actions">
              <Link href="/" className="button button-ghost">
                Back to home
              </Link>
              <button className="button" type="submit">
                Continue to first client
              </button>
            </div>
          </form>
        </article>

        <article className="panel onboarding-side">
          <div className="panel-head">
            <div>
              <p className="mini-label">Flow</p>
              <h2>What happens next</h2>
            </div>
          </div>
          <div className="stack-list">
            {setupSteps.map((step, index) => (
              <article className="stack-card" key={step}>
                <strong>Step {index + 1}</strong>
                <p>{step}</p>
              </article>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
