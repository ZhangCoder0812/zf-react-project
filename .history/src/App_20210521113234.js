import React from "react";

function connect(f1, f2) {
    return function(Com) {
        return <Com />;
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
        name: "wade";
    },
    () => {
        fn: () => {
            console.log("fn");
        };
    },
    App
);

export default App;
