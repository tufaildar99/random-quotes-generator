import "../styles/QuoteDisplay.css";
export default function QuoteDisplay({ quote }) {
  return (
    <div className="quote-display">
      <h4>"{quote.content}"</h4>
      <h6>{quote.author}</h6>
    </div>
  );
}
