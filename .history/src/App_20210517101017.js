import React, { useState } from "react";

function App(props) {
    // props 父组件传的数据
    console.log(props);
    /* 
      函数式组件没有setState ，引入hooks(react 16.8)解决函数式组件的缺陷,
      让其具有类组件相同的功能。
    */
    // let count = 0;
    let [count, setCount] = useState(0); // count 当前定义的数字 setCount更新数据的方法
    const changCount = num => {
        // count += num;
        setCount(count + num);
        console.log(count);
    };
    return (
        <div>
            <h1>当前数字：{count}</h1>
            <button onClick={() => changCount(10)}>+10</button>
        </div>
    );
}

export default App;
