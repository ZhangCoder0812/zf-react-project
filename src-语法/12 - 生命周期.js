import React from "react";

/* 

 执行顺序：constructor 
           -> getDerivedStateFromProps 
             -> render 
               -> componentDidMount

*/

class App extends React.Component {
    constructor() {
        super();
        console.log(1);
        this.state = {
            name: "wade",
        };
    }

    // 用于把props中数据转为state数据 返回值会合并到state中 初次加载和更新都会执行
    static getDerivedStateFromProps(props, state) {
        console.log(2);
        return {
            aa: 123,
        };
    }

    // 组件加载完成 一般这里法请求
    componentDidMount() {
        console.log(3);
    }

    //是否更新组件 第一次不执行。 返回true render执行 返回false render不执行 不更新
    shouldComponentUpdate() {
        console.log(4);
    }

    // 组件更新完成
    componentDidUpdate() {
        console.log(5);
    }

    // dom更新之前 render之后 拿到新的数据 返回值将作为参数传递给 componentDidUpdate
    getSnapshotBeforeUpdate(prevProps, prevState) {}

    // 卸载
    componentWillUnmount() {}

    // 错误捕获
    static getDerivedStateFromError(error) {}

    render() {
        console.log(6);
        console.log(this.state);
        // this.forceUpdate() // 强制更新
        return <div>xxx{this.state.aa}</div>;
    }
}

export default App;
