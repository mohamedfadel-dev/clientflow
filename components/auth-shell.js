import Link from "next/link";

export function AuthShell({
  eyebrow,
  title,
  description,
  children,
  asideTitle,
  asideBody,
  footer,
}) {
  return (
    <main className="auth-shell">
      <section className="auth-panel auth-panel-copy">
        <Link href="/" className="brand">
          <span className="brand-mark">CF</span>
          <span>ClientFlow</span>
        </Link>

        <div className="auth-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="auth-description">{description}</p>
        </div>

        <div className="auth-aside-card">
          <p className="mini-label">Why this product shape works</p>
          <strong>{asideTitle}</strong>
          <p>{asideBody}</p>
          <div className="auth-mini-stack">
            <article>
              <span>Clients</span>
              <strong>128 active</strong>
            </article>
            <article>
              <span>Invoices</span>
              <strong>$84k open</strong>
            </article>
            <article>
              <span>Delivery</span>
              <strong>17 in motion</strong>
            </article>
          </div>
        </div>
      </section>

      <section className="auth-panel auth-panel-form">
        <div className="auth-form-card">
          {children}
          {footer ? <div className="auth-footer">{footer}</div> : null}
        </div>
      </section>
    </main>
  );
}
