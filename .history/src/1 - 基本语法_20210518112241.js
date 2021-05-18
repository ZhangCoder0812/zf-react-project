import style from "./xxx.module.css";

/* 

  现在可以不用 import React from 'react' 原理weboack 的 ProvidePlugin
  
  在react中 把html结构当做一种数据类型

  在html中 使用变量就 {} 包起来，里面可以是变量/表达式
  
  行内样式 style={{ color: "blue" }} 不能直接 style="color:blue" 因为会被
  babel编译 没有处理这种形式

  类型要写className 不能写 class 
  
  空标签 <> </>
 
  label中的for 变成 htmlFor

  使用三元运算符 加载对应结构

  循环 map

  v-html -> dangerouslySetInnerHTML

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


*/

function App() {
  let age = 1;
  let attr = "name";
  let str = <h1>xxxx</h1>;
  let arr = [1, 2, 3, 4];
  let obj = { name: "123" };
  let t = "<h1>t</h1>";
  return (
    <>
      <div className={"App " + style.App}>
        Learn react
        <div
          data-name={attr}
          style={{ color: "blue" }}
          className={"xxx " + attr}
        >
          {str}
        </div>
        <input type="checkbox" id="aaa"></input>{" "}
        <label htmlFor="aaa">aaa</label>
        {age > 10 ? "大于10" : "小于10"}
        <ul>
          {arr.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
        {JSON.stringify(obj)}
        {/*   {obj}  对象不能直接放结构里面 */}
        <p dangerouslySetInnerHTML={{ __html: t }}></p>
      </div>
    </>
  );
}

export default App;
