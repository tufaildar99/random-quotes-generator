import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import QuoteDisplay from "./components/QuoteDisplay";
import QuoteGeneratorButton from "./components/QuoteGeneratorButton";
import Welcome from "./components/Welcome";

export default function App() {
  const [displayQuote, setDisplayQuote] = useState(false);
  const [quote, setQuote] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch("https://api.quotable.io/random");

      if (!response.ok) {
        throw new Error("Error fetching the quote");
      }

      const data = await response.json();
      setQuote(data);
      setDisplayQuote(true);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="app">
      <Header />
      {displayQuote ? <QuoteDisplay quote={quote} /> : <Welcome />}
      <QuoteGeneratorButton handleSubmit={handleSubmit} />
    </div>
  );
}
