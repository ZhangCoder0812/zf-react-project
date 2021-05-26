import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store";
import { Provider, connect } from "react-redux";

ReactDOM.render(
    <Provider store={store}>
        <App className="我是父组件传的值" />
    </Provider>,

    // <React.StrictMode> 严格模式可能会导致多次渲染
    //   <App />
    // </React.StrictMode>,
    document.getElementById("root")
);

/* 
   npm run eject 暴露webpack配置文件 不可逆 需要提交本地代码

   配置代码可以直接在 package.json 中配置  "proxy": "https://www.jianshu.com"
   但是支持简单写法 不支持对象形式。
   可以使用插件 http-proxy-middleware

   React 核心
   ReactDOM web端
   ReactNative App

   render 把虚拟dom变成真实dom 插入到节点中

   jsx (javascript + XML):
     + js 和 html 混合在一起，但他不是字符串
       [webpack中基于babel-preset-react-app把jsx语法渲染为虚拟dom
        对象，最后基于ReactDOM.render渲染为真实dom]
     + {} 存放的是js表达式：执行有返回结果的  
         不能直接放对象 ，可以放数组 但是会变成这样 [10,20] => 1020 
     + 要求只能有一个根节点 空便签 <></>
*/
