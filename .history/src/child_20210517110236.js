import React from "react";

function child(props) {
    // props 父组件传的数据
    let { data } = props;
    const change = () => {
        data = "爹，我爱你";// 这样修改不会报错
        // props.data = 'xxxx' 这样修改会报错 明显告诉了react直接修改了props props是只读的
        console.log(data)
    };
    return (
        <div>
            <h1>我是儿组件【王清】, 这是爹给我的数据---{data}</h1>
            <button onClick={change}>我要改爹的数据</button>
        </div>
    );
}

export default child;
