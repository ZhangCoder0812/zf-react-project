import React from "react";

function child(props) {
    // props 父组件传的数据
    return (
        <div>
            <h1>child</h1>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>当前数字</h1>
        </div>
    );
}

export default App;
