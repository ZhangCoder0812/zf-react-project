import React, { useState } from "react";

 
 
function App() {
    let [count, add] = useCount(100, 10, 150); // 初始值100 每次加10 不能超过150
    return (
        <div>
            <App1 />
            <App2 />
            <h1>App 当前{count}</h1>
            <button onClick={add}>++</button>
        </div>
    );
}
 

export default App;
