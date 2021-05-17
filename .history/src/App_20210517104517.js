import React, { useState } from "react";
 
function App() {
  
    return (
        <div>
            <h1>
                当前数字：{state.count},{state.name}
            </h1>
            <button onClick={() => changCount(10)}>+10</button>
        </div>
    );
}

export default App;
