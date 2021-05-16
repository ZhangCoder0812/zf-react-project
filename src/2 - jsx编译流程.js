// 实现React ReactDOM 返回的是虚拟dom

// 模拟虚拟dom
class Element {
  constructor(type, props ,children){
     this.type = type
     this.props = props
     this.children = children
  }
  render(){
      // 负责把虚拟dom转为真实dom
      let ele = document.createElement(this.type) // 创造一个真实的空的dom元素
      // 处理属性
      Object.keys(this.props).forEach(item=>[
          ele.setAttribute(item,this.props[item])
      ])
      // 处理子节点
      this.children.forEach(item=>{
          // 子节点分两种情况 字符串 Element的实例
          if(typeof item =='string'){
              let textNode = document.createTextNode(item)
              ele.appendChild(textNode)
          }else{

          }
      })
      return ele
  }
}

let Reatc = {
  createElement(type, props, ...children) {
    // 第三个参数及以后都是子节点
    return new Element(type, props, ...children);
  },
};

let ReatcDOM = {
  render(ele, container) {},
};

function App() {
  return (
    <div>
      <h1 style={{ color: "red" }}>王清是傻逼</h1>
    </div>
  );
}

export default App;
