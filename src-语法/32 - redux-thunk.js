import React from "react";
import { connect } from "react-redux";
import { add } from "./store/action";

/* 
  将actions抽离到一个文件中 可以封装公共的action逻辑
  也避免在组件中导入types

*/

class App extends React.Component {
  handleAdd = () => {
    //  this.props.dispatch(add(10));

    //当执行某个方法有异步的时候 可以将请求放在方法中 但是每个页面可能都要去引入接口 不太方便
   // setTimeout(() => {
   //   this.props.dispatch(add(10));
   // }, 2000);

   // 我们可以将接口放在action中 但是action必须要返回对象 对于异步没法同步返回一个对象
   // 这时就用到了 redux-thunk
   // 此时这个 dispatch 已经不是原生store里的dispatch，而是经过redux-thunk处理过的dispatch
   this.props.dispatch(add(10));

  };

  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
        <button onClick={this.handleAdd}>+</button>
      </div>
    );
  }
}

App = connect(
  (state) => {
    return {
      count: state.count,
    };
  },
  (dispatch) => {
    return {
      dispatch,
    };
  }
)(App);

export default App;
