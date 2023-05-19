import React from "react";
import Header from "../molecules/Header";
import Footer from "../molecules/Footer";

interface IProps {
  children: React.ReactNode;
  currentLocation: string;
}

interface IAvailableLocations {
  key: string;
  displayName: string;
}

export default function BaseLayout({ children, currentLocation }: IProps) {
  console.log(currentLocation);

  const availableLocations: IAvailableLocations[] = [
    { key: "/", displayName: "Home" },
    { key: "/loans-list", displayName: "Loans List" },
    { key: "/your-loans", displayName: "Your Loans" },
  ];

  const displayPageName = () => {
    const nameToDisplay = availableLocations.map((item) => {
      return item.key === currentLocation && item.displayName;
    });

    const allFalse = nameToDisplay.every((value) => value === false);
    return allFalse ? "404" : nameToDisplay;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header location={currentLocation} />
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {displayPageName()}
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
