function CloseAccount({ balance, isActive, dispatch }) {
  return (
    <div>
      <p>
        <button
          onClick={() => {
            if (balance === 0) {
              dispatch({ type: "closeAccount" });
            }
          }}
          disabled={isActive === false}
        >
          Close account
        </button>
      </p>
    </div>
  );
}

export default CloseAccount;
