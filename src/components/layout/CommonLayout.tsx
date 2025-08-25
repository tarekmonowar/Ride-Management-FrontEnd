import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function CommonLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen flex flex-col bg-background ">
      <Navbar />
      <section className="grow-1">{children}</section>
      <Footer />
    </main>
  );
}
