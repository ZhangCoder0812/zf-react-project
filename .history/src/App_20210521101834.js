import React, { useState } from "react";

/* 
 自定义hooks 抽离公共逻辑
*/

function App() {
    let [count ,setCount] = useState(100)
    return <div>App</div>;
}

export default App;
