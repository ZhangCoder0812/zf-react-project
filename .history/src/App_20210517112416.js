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
                <List>
                    <h1>wade</h1> {/* 相当于插槽 */}
                </List>
                <List render> {/* 扩展功能  名字随意取 一般叫render*/}
                    <h1>wade</h1>  
                </List>
            </div>
        );
    }
}

export default App;
