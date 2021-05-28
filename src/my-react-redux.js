import React, { useContext, useEffect, useState } from "react";
const Context = React.createContext();

// react-redux 返回一个对象 包含Provider方法 和 connect方法

export function Provider(props) {
  // children 为Provider包含的组件
  let { store, children } = props;
  // children 正常渲染 通过上下文给children组件传递store
  return <Context.Provider value={{ store }}>{children}</Context.Provider>;
}

// conect 方法是一个高阶函数 第一个括号接受两个函数 第二个括号接受一个组件
// c1参数是state  cb2参数是dispatch，store,dispatch都在store里存着，在Provider组件的props属性里
// Comp组件是Provider组件的children。 Comp组件获取不到store,dispatch 只能通过上下文获取
export function connect(cb1, cb2) {
  if (typeof cb1 !== "function") cb1 = () => {};
  if (typeof cb2 !== "function") cb2 = () => {};
  return function (Comp) {
    // 渲染组件 即包裹的APP组件
    return function (props) {
      // 获取上下文中的store
      let context = useContext(Context);
      // 让视图更新
      let [x, setX] = useState(0);
      useEffect(() => {
        let clear = context.store.subscribe(() => {
          setX(x + 1);
        });
        return clear;
      });
      return (
        <Comp
          {...props} /* 自己的props数据 */
          {...cb1(context.store.getState())}
          {...cb2(context.store.dispatch)}
        />
      );
    };
  };
}
