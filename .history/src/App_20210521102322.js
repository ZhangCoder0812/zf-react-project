import React, { useState } from "react";

/* 
 自定义hooks 抽离公共逻辑
   函数名必须是 use 开头 否则函数内部用不了 hooks 。
   普通函数不能使用hooks
*/

function useCount(n) {
    let [count, setCount] = useState(n);
    // 不单单只是加 还有一些其他的逻辑
    function add() {
        if (count + 10 > 150) {
            alert("大于150 不能再加了");
        } else {
            setCount(count + 10);
        }
    }
}

function App() {
    let [count, add] = useCount(100);
    return (
        <div>
            <h1> 当前{count}</h1>
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