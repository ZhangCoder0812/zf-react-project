import React, { useState, useEffect } from "react";

function App() {
  let [ state,setState] = useState({
    count:100
  })
    return <div>App

      <h2>{state.count}</h2>
      <button></button>
    </div>;
}

export default App;
