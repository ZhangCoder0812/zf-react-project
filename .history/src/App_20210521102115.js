import React, { useState } from "react";

/* 
 自定义hooks 抽离公共逻辑
*/

function App() {
    let [count, setCount] = useState(100);
    // 不单单
    function add() {
        if (count + 10 > 150) {
            alert("大于150 不能再加了");
        } else {
            setCount(count + 10);
        }
    }
    return (
        <div>
            <h1> 当前{count}</h1>
            <button onClick={add}>++</button>
        </div>
    );
}

export default App;
