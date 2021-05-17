import React, { useState } from "react";
 
function App() {
    let [state, setState] = useState({
        count: 0,
        name: "wade",
    });
    const changCount = num => {
        setState({
            ...state, //这里要手动将之前的数据放在这 不然会丢失 这个setState不像类组件的setState 这里会整体替换之前的state
            count: state.count + num,
        });
    };
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
