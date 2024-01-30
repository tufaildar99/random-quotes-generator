import "../styles/QuoteGeneratorButton.css";
export default function QuoteGeneratorButton({ handleSubmit }) {
  return (
    <div className="quote-generator-button">
      <form onSubmit={handleSubmit}>
        <button type="submit">Generate Quote</button>
      </form>
    </div>
  );
}
