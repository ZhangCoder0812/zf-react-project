import React, { useState } from "react";
// props 父组件传的数据
function App(props) {
    /*   
      console.log(props);
      let count = 0;
      const changCount = num => {
          count += num;
          console.log(count);
      }; 
      上面的写法不会更新视图 
      函数式组件没有setState ，引入hooks(react 16.8)解决函数式组件的缺陷,
      让其具有类组件相同的功能。
      useState()  初始化执行只会执行一次返回初始值 以后每次执行返回的是上次更新后的值
    */
    let res = useState(0);
    console.log(res);
    let [count, setCount] = res; // count 当前定义的数字 setCount更新数据的方法
    const changCount = num => {
        setCount(count + num);
        console.log(count);
    };
    const log = () => {
      //  先点击+10 在点击log 输出的count是最新的值
      //  先点击 log 在点击+10 输的count是之前的值
      //  因为每一次dom更新App都会执行一次 函数执行形成独立的作用域 
        setTimeout(() => {
            console.log(count);
        }, 2000);
    };
    return (
        <div>
            <h1>当前数字：{count}</h1>
            <button onClick={() => changCount(10)}>+10</button>
            <button onClick={() => log()}>log</button>
        </div>
    );
}

export default App;
