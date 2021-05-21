import React from "react";

/* 
    React.createContext 创建一个上下文 父组件提供一些属性
     那么所有的后代组价都可以获取到 类似于 provide/inject 
*/

class Child extends React.Component {
    render() {
        return <div>我是子组件</div>;
    }
}

const MyContext = React.createContext(); // 创建一个上下文

class App extends React.Component {
    render() {
        return (
            /* 一般是包住这个解构 也可以包住单个子组件 */
            <MyContext>
                <div>
                    我是父组件
                    <Child />
                </div>
            </MyContext>
        );
    }
}

export default App;
