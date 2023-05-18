import React from "react";
import ListItem from "../atoms/ListItem";

const people = [
  "Loan for a Car",
  "Borrowing for a Business Startup",
  "Financing Your Business Venture",
  "Funding for a New Vehicle",
  "Seeking a Loan for a Business Expansion",
  "Money Borrowing for a Car Purchase",
  "Loan Application for Starting a Business",
  "Financing Options for a New Car",
  "Seeking Funds to Kickstart Your Business",
  "Loan Request for Vehicle Purchase",
];

export default function List() {
  return (
    <>
      {people.map((item) => {
        return <ListItem key={item} title={item} />;
      })}
    </>
  );
}
