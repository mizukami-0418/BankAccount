function Deposit({ isActive, dispatch }) {
  return (
    <div>
      <p>
        <button
          onClick={() => dispatch({ type: "deposit" })}
          disabled={isActive === false}
        >
          Deposit 150
        </button>
      </p>
    </div>
  );
}

export default Deposit;
