import "./globals.css";
import { AppProvider } from "../components/app-provider";

export const metadata = {
  title: "ClientFlow",
  description: "A polished Next.js client portal and operations dashboard.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
