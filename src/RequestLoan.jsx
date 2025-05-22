function RequestLoan({ isActive, dispatch }) {
  return (
    <div>
      <p>
        <button
          onClick={() => dispatch({ type: "requestLoan" })}
          disabled={isActive === false}
        >
          Request a loan of 5000
        </button>
      </p>
    </div>
  );
}

export default RequestLoan;
