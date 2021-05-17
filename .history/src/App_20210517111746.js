import React from "react";
import List from "./components/List";

class App extends React.Component {
    state = {
        arr: [1, 2, 3, 4, 5],
    };

    render() {
        return (
            <div>
                <List />
            </div>
        );
    }
}

export default App;
