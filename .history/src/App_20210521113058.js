import React from "react";

function connect(Com) {
    let state = {
        name: "wade",
    };

    return function() {
        return <Com {...state} />;
    };
}

class App extends React.Component {
    render() {
        console.log(this);
        return <div>App</div>;
    }
}
App = connect(
    () => {
        name: "wde "
    },
    () => {},
    App
);

export default App;
