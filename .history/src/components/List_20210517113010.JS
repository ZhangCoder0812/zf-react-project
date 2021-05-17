import React from "react";

function List(props) {
    let { data = [], children, render } = props; // children 对应组件包含的内容 类似于插槽的内容
    return (
        <div>
            {data.map(item => (
                <li key={item}>{item}</li>
            ))}
            ---------------------------
            {children}
            ---------------------------
            {data.map(item => (
                <li key={item}>{render(item)}</li>
            ))}
        </div>
    );
}

export default List;
