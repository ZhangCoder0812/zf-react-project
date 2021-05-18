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
                <div data-name={attr} style={{ color: "blue" }} className={"xxx " + attr}>
                    {str}
                </div>
                <input type="checkbox" id="aaa"></input> <label htmlFor="aaa">aaa</label>
                {age > 10 ? "大于10" : "小于10"}
                <ul>
                    {arr.map(item => {
                        return <li key={item}>{item}</li>;
                    })}
                </ul>
                {JSON.stringify(obj)}
                {/*   {obj}  对象不能直接放结构里面 */}
                <p dangerouslySetInnerHTML={{ __html: t }}></p>
                {/* 不能使用 javascript:;  可以使用#后者自己基于JS阻止默认行为 */}
                <a href="#" onClick={ev => ev.preventDefault()}>
                    立即下载
                </a>
            </div>
        </>
    );
}

export default App;
