import React from "react";

function connect(f1, f2) {
    let props = f1();
    let fn = f2();
    return function(Com) {
        return function() {
            return <Com />;
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
    () => {
       return 
    },
    () => {
        fn: () => {
            console.log("fn");
        };
    },
    App
);

export default App;
