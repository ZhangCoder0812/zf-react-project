import React from "react";

function App(props) {
    // props 父组件传的数据
    console.log(props);
    let count = 100;
    const changCount = num => {
        count += num;
    };
    return (
        <div>
            <h1>当前数字：{count}</h1>
            <button onClick={()=>this.changCount(10)}>+10</button>
        </div>
    );
}

export default App;
