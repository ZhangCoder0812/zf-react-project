import React from "react";
import List from "./components/List";

class App extends React.Component {
    state = {
        arr: [1, 2, 3, 4, 5],
    };

    render() {
        let { arr } = this.state;
        return (
            <div>
                <List data={arr} />
                <List data={arr}>
                    <h1>wade</h1> 
                </List>
            </div>
        );
    }
}

export default App;
