function OpenAccount({ isActive, dispatch }) {
  return (
    <div>
      <p>
        <button
          onClick={() => dispatch({ type: "openAccount" })}
          disabled={isActive === true}
        >
          Open account
        </button>
      </p>
    </div>
  );
}

export default OpenAccount;
