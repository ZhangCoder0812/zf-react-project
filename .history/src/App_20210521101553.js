import React from "react";

 
 
class App extends React.Component {
    state = {
        xxx: "我是父组件数据",
    };
    render() {
        return (
            /* 一般是包住这个解构 也可以包住单个子组件 value父组件提供的数据*/
            <MyContext.Provider value={this.state}>
                <div>
                    我是父组件
                    <Child />
                </div>
            </MyContext.Provider>
        );
    }
}

export default App;
