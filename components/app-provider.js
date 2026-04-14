"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { appConfig, isDemoMode, isSupabaseMode } from "../lib/app-config";
import { cloneInitialData } from "../lib/demo-data";

const STORAGE_KEY = "clientflow-app-state";

const AppContext = createContext(null);

function buildDefaultState() {
  const defaults = cloneInitialData();
  return {
    ready: false,
    user: null,
    workspace: defaults.workspace,
    clients: defaults.clients,
    invoices: defaults.invoices,
    projects: defaults.projects,
    tasks: defaults.tasks,
  };
}

export function AppProvider({ children }) {
  const [state, setState] = useState(buildDefaultState);

  useEffect(() => {
    const saved =
      typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;

    if (!saved) {
      setState((current) => ({ ...current, ready: true }));
      return;
    }

    try {
      const parsed = JSON.parse(saved);
      setState({
        ...buildDefaultState(),
        ...parsed,
        ready: true,
      });
    } catch {
      setState((current) => ({ ...current, ready: true }));
    }
  }, []);

  useEffect(() => {
    if (!state.ready || typeof window === "undefined") {
      return;
    }

    const { ready, ...persisted } = state;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(persisted));
  }, [state]);

  const api = useMemo(
    () => ({
      ...state,
      mode: appConfig.mode,
      isDemoMode,
      isSupabaseMode,
      signIn({ email }) {
        const guessedName = email.split("@")[0].replace(/[._-]/g, " ");
        setState((current) => ({
          ...current,
          user: {
            name: guessedName.replace(/\b\w/g, (char) => char.toUpperCase()),
            email,
          },
        }));
      },
      signUp({ name, email, workspaceName }) {
        setState((current) => ({
          ...current,
          user: { name, email },
          workspace: {
            ...current.workspace,
            name: workspaceName,
            onboardingComplete: false,
          },
        }));
      },
      signOut() {
        setState((current) => ({
          ...current,
          user: null,
        }));
      },
      completeOnboarding(payload) {
        setState((current) => ({
          ...current,
          workspace: {
            ...current.workspace,
            ...payload,
            onboardingComplete: true,
          },
        }));
      },
      addClient(payload) {
        setState((current) => ({
          ...current,
          clients: [
            {
              id: `client-${Date.now()}`,
              health: payload.health ?? "Watch",
              status: payload.status ?? "Review",
              ...payload,
            },
            ...current.clients,
          ],
        }));
      },
      updateClient(clientId, payload) {
        setState((current) => ({
          ...current,
          clients: current.clients.map((client) =>
            client.id === clientId ? { ...client, ...payload } : client
          ),
        }));
      },
      addInvoice(payload) {
        setState((current) => ({
          ...current,
          invoices: [
            {
              id: `invoice-${Date.now()}`,
              amount: payload.amount || "$0",
              ...payload,
            },
            ...current.invoices,
          ],
        }));
      },
      updateInvoice(invoiceId, payload) {
        setState((current) => ({
          ...current,
          invoices: current.invoices.map((invoice) =>
            invoice.id === invoiceId ? { ...invoice, ...payload } : invoice
          ),
        }));
      },
    }),
    [state]
  );

  return <AppContext.Provider value={api}>{children}</AppContext.Provider>;
}

export function useAppState() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppState must be used inside AppProvider");
  }
  return context;
}
