import React from "react";
import Logo from "../../../public/images/loan-connect-logo.png";
import GirlsImage from "../../../public/images/landing-page-image.png";

const stats = [
  { id: 1, name: "Transactions every 24 hours", value: "44 million" },
  { id: 2, name: "Assets under holding", value: "$119 trillion" },
  { id: 3, name: "New users annually", value: "46,000" },
];

export default function LandingPage() {
  return (
    <div className="">
      <div className="container mx-auto flex flex-col items-center justify-center px-4">
        <h1 className="text-5xl text-center font-extrabold mb-8 leading-tight">
          Loan Connect <br />{" "}
          <p className="text-3xl">Peer-to-Peer Lending Made Easy</p>
          <img
            className="mx-auto h-20 mt-6 w-auto"
            src={Logo}
            alt="loan connect logo"
          />
        </h1>
        <p className="text-xl text-center mb-12">
          Welcome to our platform that connects borrowers and lenders through
          peer-to-peer lending. With our innovative P2P lending model, you can
          borrow or invest funds directly with individuals, bypassing
          traditional financial institutions.
        </p>
        <div className="flex justify-center mb-10">
          <button className="bg-green-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg mr-4">
            Create Account now
          </button>
          <button className="bg-gray-800 50border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-500">
            Log into your account
          </button>
        </div>
      </div>
      <div className="bg-white text-gray-800 py-8 rounded-lg flex:col lg:flex">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Why do you need it?</h2>

          <p className="text-lg mb-8">
            Whether you need a personal loan for a major purchase or want to
            earn attractive returns by lending money to others, our P2P lending
            platform offers a secure and transparent way to fulfill your
            financial goals.
          </p>
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <p className="text-lg mb-8">
            Borrowers can create loan listings outlining their borrowing needs,
            and investors can browse and choose loan listings to fund. The
            platform facilitates the loan process, including credit checks, loan
            documentation, and repayment management.
          </p>
          <p className="text-lg">
            Our platform also provides tools for lenders to diversify their
            investments, assess borrower creditworthiness, and track their
            portfolio performance. We prioritize security and ensure that all
            transactions and personal data are protected with robust encryption
            and privacy measures.
          </p>
        </div>
        <div className="container mx-auto px-4 flex">
          <img
            className="mx-auto object-cover w-auto"
            src={GirlsImage}
            alt="loan connect logo"
          />
        </div>
      </div>
      <div className="bg-inherit sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt className="text-base leading-7 text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
