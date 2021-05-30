import React from "react";
import ReactDOM from "react-dom";
/* 

  组件的首字母必须大写
 
  组件有两个数据源：
    props：属性 父亲给的数据
    state：状态 自己的数据

  两类组件；
    - 函数式(静态)组件：
        hooks 专门为了解决函数式组件的缺陷

    - 类组件: 必须有render方法 可以没有constructor 一旦写了 必须要写super()

*/

class App extends React.Component {
  /* 老写法
    constructor(props) {
      super(props); // super继承相当于call继承 super->React.Component 内部this.props=props
                       这就是为什么当前组件可以拿到props
      this.state = {
        name: "wade",
      };
  } 
  */
  // 新写法
  state = {
    name: "wade",
  };
  render() {
    let { name } = this.state;
    console.log(this.props.className);
    return <div>hello {name}</div>;
  }
}

export default App;
