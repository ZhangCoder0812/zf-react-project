import React from "react";

function List(props) {
    let { data = [], children } = props;  // children 对应组件包含的内容
    return ( 
        <div>
            {data.map(item => (
                <li key={item}>{item}</li>
            ))}
            {children}
        </div>
    );
}

export default List;
