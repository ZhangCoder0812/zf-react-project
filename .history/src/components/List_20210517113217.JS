import React from "react";

function List(props) {
    let { data = [], children, render } = props;
     // children 对应组件包含的内容 类似于插槽的内容 也是只读的
     /* 
       三种情况：
         - 对象 虚拟dom对象
         - 字符串
     */
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
