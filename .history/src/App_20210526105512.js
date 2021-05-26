import React from "react";

/* 
   react-redux：安装  npm i
    
*/

class App extends React.Component {
    handleAdd = () => {};

    render() {
        return (
            <div>
                <h1>{}</h1>
                <button onClick={this.handleAdd}>+</button>
            </div>
        );
    }
}

export default App;
