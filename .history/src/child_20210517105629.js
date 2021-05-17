import React from "react";

function child(props) {
    // props 父组件传的数据
    let { data } = props;
    return (
        <div>
            <h1>我是儿组件,这是爹给我的数据->{data}</h1>
        </div>
    );
}

export default child;
