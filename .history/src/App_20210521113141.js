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
        name: "wade";
    },
    () => {
        fn:()=>{
            console.log('fn')
        }
    },
    App
);

export default App;
