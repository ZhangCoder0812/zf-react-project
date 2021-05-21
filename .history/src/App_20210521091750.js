import React, { useReducer } from "react";

function App() {
   
  return (
    <div>
      <h1>
        {name} --- {count}
      </h1>
      <button
        onClick={() =>
          dispatch({
            type: "changeName",
            payload: name + "lbj",
          })
        }
      >
        name +
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "changeCount",
            payload: count + 10,
          })
        }
      >
        count +
      </button>
    </div>
  );
}

export default App;
