import React from "react";

/* 
    React.createContext 创建一个上下文 父组件提供一些属性
     那么所有的后代组价都可以获取到 类似于 provide/inject 
*/

const MyContext = React.createContext(); // 创建一个上下文

class Child extends React.Component {
    static contextType = MyContext; // 声明一个静态属性

    render() {
        console.log(this.contextType);
        return <div>我是子组件</div>;
    }
}

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
