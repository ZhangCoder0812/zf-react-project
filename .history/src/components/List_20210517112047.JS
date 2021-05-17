import React from "react";

function List(props) {
    let { data = [], children } = props;
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
