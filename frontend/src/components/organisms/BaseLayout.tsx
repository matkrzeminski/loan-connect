import React from "react";
import Header from "../molecules/Header";
import Footer from "../molecules/Footer";

interface IProps {
  children: React.ReactNode;
}

export default function BaseLayout({ children }: IProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>
      <main className="flex-grow">
        <div className="mx-auto max-w-7xl pt-6 px-6 lg:px-8">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
