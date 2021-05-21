import React, { useState } from "react";

/* 
 自定义hooks 抽离公共逻辑
*/

function App() {
    let [count ,setCount] = useState(100)
    function add(){
        setTimeout(()=>setCount(count+1))
    }
    return <div>App
        <button onClick={add}></button>
    </div>;
}

export default App;
