import React from "react";

class App extends React.Component {
    fn = () => {
        console.log(this.refs.xxx);
    };
    render() {
        return (
            <div>
                <h1 ref="xxx">我是h1标签</h1>
                <button onClick={this.fn}>获取h1</button>
            </div>
        );
    }
}

export default App;
