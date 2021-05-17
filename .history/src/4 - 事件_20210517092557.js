import React from "react";
import ReactDOM from "react-dom";
/* 

  事件：react事件是绑定在最外层(可以认为)
    

*/

class App extends React.Component {
    state = {
        name: "xxx",
    };
    fn() {
        console.log("fn");
        console.log(this); // 下面不绑定this的话这里是 undefined
        // 这个函数是react内部执行的 严格模式下是undefined
        console.log(this.state.name);
    }
    fn2() {
        // 下面写成箭头函数没有this 向上级作用域查找 找到render中this 即当前实例
        console.log(this);
        console.log(this.state.name);
    }
    fn3 = () => {
        // 这里写成箭头函数 相当于在constructor中找this 即当前实例
        console.log(this);
        console.log(this.state.name);
    };
    fn4(...args) {
        // 传参数 bind传参拿到的参数会自动增加一个react处理过的事件对象 bind传参事件对象永远在最后一项
        console.log(args);
    }
    render() {
        return (
            <div>
                <button onClick={this.fn.bind(this)}>点击1</button>
                <button onClick={() => this.fn2()}>点击2</button>
                <button onClick={this.fn3}>点击3</button>
                <button onClick={e => this.fn4(1, 2, e)}>点击4</button>
                <button onClick={this.fn4.bind(this, 1, 2)}>点击4</button>
            </div>
        );
    }
}

export default App;
