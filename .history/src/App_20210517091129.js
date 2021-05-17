import React from "react";
import ReactDOM from "react-dom";
/* 

  事件；
    

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
               
            </div>
        );
    }
}

export default App;
