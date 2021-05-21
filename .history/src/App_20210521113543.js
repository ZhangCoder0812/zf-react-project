import React from "react";

function connect(f1, f2) {
    let props = f1();
    let fnObj = f2();
    return function(Com) {
        return function() {
            return <Com {...props} {...fn} />;
        };
    };
}

class App extends React.Component {
    render() {
        console.log(this);
        return <div>App</div>;
    }
}
App = connect(
    () => ({
        name: "wade",
    }),
    () => ({
        fn: () => {
            console.log("fn");
        },
    }),
    App
);

export default App;
