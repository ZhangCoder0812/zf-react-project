import React, { useContext } from "react";
/* 
   函数式组件中的上下文
*/
let MyContext = React.createContext();

function Child() {
  let context = useContext(MyContext); // 相当于类组件中的 static contextType = MyContext;
  console.log(context);
  return <div>Child2</div>;
}

function App() {
  let name = "wade";

  return (
    <MyContext.Provider value={name}>
      <div>
        <Child />
      </div>
    </MyContext.Provider>
  );
}

export default App;
