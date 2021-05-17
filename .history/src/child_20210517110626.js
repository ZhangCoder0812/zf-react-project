import React from "react";

function child(props) {
    // props 父组件传的数据 props是只读的
    let { data, onChange } = props;
    const change = () => {
        // data = "爹，给我买辆宝马"; // 这样修改不会报错 因为data是一个变量 不会props中的data
        // props.data = 'xxxx' 这样修改会报错 明显告诉了react直接修改了props
        onChange( "爹，给我买辆宝马");
        console.log(data);
    };
    return (
        <div>
            <h1>我是儿组件【王清】, 这是爹给我的数据---{data}</h1>
            <button onClick={change}>我要改爹的数据</button>
        </div>
    );
}

export default child;
