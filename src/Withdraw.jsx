function Withdraw({ isActive, dispatch }) {
  return (
    <div>
      <p>
        <button
          onClick={() => dispatch({ type: "withdraw" })}
          disabled={isActive === false}
        >
          Withdraw 50
        </button>
      </p>
    </div>
  );
}

export default Withdraw;
