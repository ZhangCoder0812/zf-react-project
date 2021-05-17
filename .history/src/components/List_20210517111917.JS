import React from "react";

function List(props) {
    let { data = [] } = props;
    return (
        <div>
            {data.map(item => (
                <li key={item}>{item}</li>
            ))}
        </div>
    );
}

export default List;
