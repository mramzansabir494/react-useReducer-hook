import React, { useReducer } from "react";
import "./App.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    // case "RESET":
    //   console.log("Reset .........");
    //   return { ...state, reset: state.reset };
    case "NEW_USER_INPUT":
      return { ...state, userInput: action.payload };
    case "TOGGLE_COLOR":
      return { ...state, color: !state.color };
    default:
      throw new Error();
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    // reset: 0,
    userInput: "",
    color: false,
  });
  return (
    <main className="App" style={{ color: state.color ? "red" : "green" }}>
      <div className="container">
        <input
          placeholder="Type Inside ..."
          type="text"
          value={state.userInput}
          onChange={(e) =>
            dispatch({ type: "NEW_USER_INPUT", payload: e.target.value })
          }
        />
        <br />
        <br />
        <p>Count: {state.count}</p>
        {/* <p>Reset: {state.reset}</p> */}
        <section>
          <button onClick={() => dispatch({ type: "DECREMENT" })}> - </button>
          <button onClick={() => dispatch({ type: "INCREMENT" })}> + </button>
          {/* <button onClick={() => dispatch({ type: "RESET" })}>Reset</button> */}
          <button onClick={() => dispatch({ type: "TOGGLE_COLOR" })}>
            Color
          </button>
        </section>
        <br />
        <br />
        <p>{state.userInput}</p>
      </div>
    </main>
  );
}

export default App;
