import React, { useState } from "react";

/* 
  
  受控组件：受数据控制的组件
  非受控组件

  受不受控一般指的是表单元素
 
*/

function App() {
    let [name, setName] = useState("wade");
    return (
        <div>
            <input type="text" value={name} />
        </div>
    );
}

export default App;
