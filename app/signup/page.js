"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthShell } from "../../components/auth-shell";
import { useAppState } from "../../components/app-provider";

export default function SignupPage() {
  const router = useRouter();
  const { ready, user, workspace, signUp } = useAppState();
  const [name, setName] = useState("Mohamed Fadel");
  const [email, setEmail] = useState("mohamed@example.com");
  const [workspaceName, setWorkspaceName] = useState("ClientFlow Studio");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (!ready || !user) {
      return;
    }

    router.replace(workspace.onboardingComplete ? "/dashboard" : "/onboarding");
  }, [ready, router, user, workspace.onboardingComplete]);

  return (
    <AuthShell
      eyebrow="Get started"
      title="Create your workspace."
      description="This signup flow keeps the product direction grounded in something that could actually be shipped."
      asideTitle="The product gets stronger with entry flow."
      asideBody="Once auth exists, the next natural steps are onboarding, seeded data, and real account state."
      footer={
        <p>
          Already have an account? <Link href="/login">Sign in</Link>
        </p>
      }
    >
      <form
        className="auth-form"
        onSubmit={(event) => {
          event.preventDefault();
          signUp({ name, email, workspaceName, password });
          router.push("/onboarding");
        }}
      >
        <label>
          <span>Full name</span>
          <input value={name} onChange={(event) => setName(event.target.value)} type="text" />
        </label>
        <label>
          <span>Work email</span>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label>
          <span>Workspace name</span>
          <input
            type="text"
            value={workspaceName}
            onChange={(event) => setWorkspaceName(event.target.value)}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            placeholder="Create a strong password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button className="button auth-submit" type="submit">
          Create account
        </button>
      </form>
    </AuthShell>
  );
}
