import React from "react";

function connect(f1, f2) {
    let propsObj = f1();
    let fnObj = f2();
    return function(Com) {
        return function() {
            return <Com {...propsObj} {...fnObj} />;
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
    
)(App);

export default App;
