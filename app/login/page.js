"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthShell } from "../../components/auth-shell";
import { useAppState } from "../../components/app-provider";

export default function LoginPage() {
  const router = useRouter();
  const { ready, user, workspace, signIn } = useAppState();
  const [email, setEmail] = useState("mohamed@example.com");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (!ready || !user) {
      return;
    }

    router.replace(workspace.onboardingComplete ? "/dashboard" : "/onboarding");
  }, [ready, router, user, workspace.onboardingComplete]);

  return (
    <AuthShell
      eyebrow="Welcome back"
      title="Sign in to ClientFlow."
      description="A clean auth surface is part of the product story. This page turns the dashboard into a more believable app."
      asideTitle="A portfolio project should feel enterable."
      asideBody="Adding auth screens changes the app from a nice mockup into something closer to a real SaaS experience."
      footer={
        <p>
          New here? <Link href="/signup">Create an account</Link>
        </p>
      }
    >
      <form
        className="auth-form"
        onSubmit={(event) => {
          event.preventDefault();
          signIn({ email, password });
          router.push(workspace.onboardingComplete ? "/dashboard" : "/onboarding");
        }}
      >
        <label>
          <span>Email</span>
          <input
            type="email"
            placeholder="mohamed@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <div className="auth-row">
          <label className="checkbox-row">
            <input type="checkbox" defaultChecked />
            <span>Keep me signed in</span>
          </label>
          <Link href="/forgot-password" className="auth-link">
            Forgot password?
          </Link>
        </div>
        <button className="button auth-submit" type="submit">
          Sign in
        </button>
      </form>
    </AuthShell>
  );
}
