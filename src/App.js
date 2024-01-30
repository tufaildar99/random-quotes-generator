import React from "react";
import { useState } from "react";

export default function App() {
  const [displayQuote, setDisplayQuote] = useState(false);
  return (
    <div className="app">
      <Header />
      {displayQuote ? <QuoteDisplay /> : <Welcome />}
      <QuoteGeneratorButton />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h2>Quotes Generator</h2>
    </div>
  );
}

function Welcome() {
  return (
    <div className="welcome">
      <h3>Welcome!</h3>
      <p>Click on the button below to start generating quotes.</p>
    </div>
  );
}

function QuoteDisplay() {
  return (
    <div className="quote-display">
      <h4>
        "Never apologize for showing feeling. When you do so, you apologize for
        truth."
      </h4>
      <h6>Benjamin Franklin</h6>
    </div>
  );
}

function QuoteGeneratorButton({ handleSubmit }) {
  return (
    <div className="quote-generator-button">
      <form onSubmit={handleSubmit}>
        <button type="submit">Generate Quote</button>
      </form>
    </div>
  );
}
