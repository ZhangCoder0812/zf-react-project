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
    */
   let res = useState(0)
    console.log(useState(0));
    let [count, setCount] = useState(0); // count 当前定义的数字 setCount更新数据的方法
    const changCount = num => {
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
