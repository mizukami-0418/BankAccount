import React, { useReducer } from "react";
import OpenAccount from "./OpenAccount";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import RequestLoan from "./RequestLoan";
import PayLoan from "./PayLoan";
import CloseAccount from "./CloseAccount";
import "./App.css";

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};

function reducer(state, action) {
  if (!state.isActive && action.type !== "openAccount") return state;

  switch (action.type) {
    case "openAccount":
      return { ...state, balance: 500, isActive: true };
    case "closeAccount":
      return { ...initialState };
    case "deposit":
      return { ...state, balance: state.balance + 150 };
    case "withdraw":
      return { ...state, balance: state.balance - 50 };
    case "requestLoan":
      return {
        ...state,
        balance: state.balance + 5000,
        loan: state.loan + 5000,
      };
    case "payLoan":
      return { ...state, balance: state.balance - state.loan, loan: 0 };
    default:
      throw new Error();
  }
}

export default function App() {
  const [{ balance, loan, isActive }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      <p>Balance: {balance}</p>
      <p>Loan: {loan}</p>

      <OpenAccount isActive={isActive} dispatch={dispatch} />
      <Deposit isActive={isActive} dispatch={dispatch} />
      <Withdraw isActive={isActive} dispatch={dispatch} />
      <RequestLoan isActive={isActive} dispatch={dispatch} />
      <PayLoan isActive={isActive} dispatch={dispatch} />
      <CloseAccount balance={balance} isActive={isActive} dispatch={dispatch} />
    </div>
  );
}
