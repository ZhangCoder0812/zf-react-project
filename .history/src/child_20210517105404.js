import React from "react";

function child(props) {
    // props 父组件传的数据
    return (
        <div>
            <h1>child</h1>
        </div>
    );
}

class App extends React.Component {
    render() {
        return <div>App</div>;
    }
}

export default App;
import React from "react";

function child(props) {
    // props 父组件传的数据
    return (
        <div>
            <h1>child</h1>
        </div>
    );
}

export default child;
