"use client";

import Link from "next/link";
import { useState } from "react";
import { AuthShell } from "../../components/auth-shell";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("mohamed@example.com");
  const [sent, setSent] = useState(false);

  return (
    <AuthShell
      eyebrow="Recovery"
      title="Reset your password."
      description="A small page, but an important one. These supporting routes are part of what makes the app feel complete."
      asideTitle="Details matter in portfolio apps."
      asideBody="Even simple flows like password reset help show that the product has been thought through beyond the hero section."
      footer={
        <p>
          Remembered it? <Link href="/login">Back to sign in</Link>
        </p>
      }
    >
      <form
        className="auth-form"
        onSubmit={(event) => {
          event.preventDefault();
          setSent(true);
        }}
      >
        <label>
          <span>Email</span>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <button className="button auth-submit" type="submit">
          Send reset link
        </button>
        {sent ? (
          <p className="auth-inline-note">
            Reset link sent. In a real backend version this would trigger an email flow.
          </p>
        ) : null}
      </form>
    </AuthShell>
  );
}
