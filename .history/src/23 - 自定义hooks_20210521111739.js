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

// function App() {
//     let [count, setCount] = useState(100);
//     // 不单单只是加 还有一些其他的逻辑
//     function add() {
//         if (count + 10 > 150) {
//             alert("大于150 不能再加了");
//         } else {
//             setCount(count + 10);
//         }
//     }
//     return (
//         <div>
//             <h1> 当前{count}</h1>
//             <button onClick={add}>++</button>
//         </div>
//     );
// }

export default App;
