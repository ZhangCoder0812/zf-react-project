import React from "react";

/* 
    React.createContext 创建一个上下文 父组件提供一些属性
     那么所有的后代组价都可以获取到 类似于 provide/inject 
*/

const MyContext = React.createContext(); // 创建一个上下文

class grandSon extends React.Component {
    static contextType = MyContext;
    render() {
        console.log(this.context);
        return <div>我是孙子组件</div>;
    }
}

class Child extends React.Component {
    static contextType = MyContext; // 声明一个静态属性 contextType 变量名规定死的 不能变
    render() {
        console.log(this.context); // context内置属性 不是上面声明的静态变量
        return (
            <div>
                我是子组件
                <grandSon />
            </div>
        );
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
