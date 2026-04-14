"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAppState } from "./app-provider";

const navItems = [
  { href: "/dashboard", label: "Overview" },
  { href: "/dashboard/clients", label: "Clients" },
  { href: "/dashboard/projects", label: "Projects" },
  { href: "/dashboard/invoices", label: "Invoices" },
  { href: "/dashboard/settings", label: "Settings" },
];

export function DashboardShell({ children, eyebrow, title, description, actions }) {
  const pathname = usePathname();
  const router = useRouter();
  const { ready, user, workspace, signOut } = useAppState();

  useEffect(() => {
    if (!ready) {
      return;
    }

    if (!user) {
      router.replace("/login");
      return;
    }

    if (!workspace.onboardingComplete && pathname.startsWith("/dashboard")) {
      router.replace("/onboarding");
    }
  }, [pathname, ready, router, user, workspace.onboardingComplete]);

  if (!ready || !user || !workspace.onboardingComplete) {
    return (
      <main className="dashboard-shell">
        <section className="dashboard-main dashboard-loading">
          <p className="eyebrow">Loading</p>
          <h1>Preparing your workspace.</h1>
        </section>
      </main>
    );
  }

  return (
    <main className="dashboard-shell">
      <aside className="sidebar">
        <Link href="/" className="brand brand-large">
          <span className="brand-mark">CF</span>
          <div>
            <strong>{workspace.name}</strong>
            <p>{user.email}</p>
          </div>
        </Link>
        <nav className="sidebar-nav">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className={active ? "active" : ""}>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <button
          className="sidebar-logout"
          onClick={() => {
            signOut();
            router.push("/login");
          }}
          type="button"
        >
          Sign out
        </button>
      </aside>

      <section className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p className="muted">{description}</p>
          </div>
          {actions ? <div className="dashboard-actions">{actions}</div> : null}
        </header>
        {children}
      </section>
    </main>
  );
}
