function PayLoan({ isActive, dispatch }) {
  return (
    <div>
      <p>
        <button
          onClick={() => dispatch({ type: "payLoan" })}
          disabled={isActive === false}
        >
          Pay loan
        </button>
      </p>
    </div>
  );
}

export default PayLoan;
