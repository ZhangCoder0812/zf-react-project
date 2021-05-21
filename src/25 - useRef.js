import React, { useRef } from "react";

/* 

  函数式组件获取元素/组件 获取的必须式类组件 不能式函数式组件

*/

class Child extends React.Component {
  render() {
    return <div>Child</div>;
  }
}

function App() {
  let xxx = useRef();
  let www = useRef();
  let fn = () => {
    console.log(xxx.current);
    console.log(www.current);
  };
  return (
    <div>
      <h1 ref={xxx}> 我是h1</h1>
      <Child ref={www} />
      <button onClick={fn}>获取</button>
    </div>
  );
}

export default App;
