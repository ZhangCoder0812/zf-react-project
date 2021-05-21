import React, { useState } from "react";

/* 
 自定义hooks 抽离公共逻辑
   函数名必须是 use 开头 否则函数内部用不了 hooks 。
   普通函数不能使用hooks （可以把hooks作为参数传给普通函数使用）
*/

function 

function useCount(n, step, max) {
    let [count, setCount] = useState(n);
    function add() {
        if (count + step > max) {
            alert(`大于${max} 不能再加了`);
        } else {
            setCount(count + step);
        }
    }
    return [count, add];
}

function App1() {
    let [count, add] = useCount(10, 20, 60); // 初始值20 每次加20 不能超过60
    return (
        <div>
            <h1>App1 当前{count}</h1>
            <button onClick={add}>++</button>
        </div>
    );
}

function App() {
    let [count, add] = useCount(100, 10, 150); // 初始值100 每次加10 不能超过150
    return (
        <div>
            <App1 />
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
