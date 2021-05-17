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
                
                <List
                    render={item => {
                        /* 扩展功能展示什么由父组件决定  名字随意取 一般叫render*/
                        return <h3>{item}</h3>;
                    }}
                ></List>
            </div>
        );
    }
}

export default App;
