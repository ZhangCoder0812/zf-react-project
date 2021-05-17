import React, { useState } from "react";

/* 
  
  受控组件：受数据控制的组件 且需要绑定对应事件
  非受控组件：不受数据控制的组件

  受不受控一般指的是表单元素
  
*/

function App() {
    let [name, setName] = useState("wade");
    return (
        <div>
            <h1>当前name：{name}</h1>
            <input
                type="text"
                value={name}
                onChange={e => {
                    setName(e.target.value);
                }}
            />
        </div>
    );
}

export default App;
