import React from "react";
import Header from "../molecules/Header";
import Footer from "../molecules/Footer";

interface IProps {
  children: React.ReactNode;
}

export default function BaseLayout({ children }: IProps) {
  return (
    <div className="min-h-full">
      <Header />
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
