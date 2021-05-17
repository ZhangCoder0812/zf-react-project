// 简单模拟实现React ReactDOM 返回的是虚拟dom

// 模拟虚拟dom
class Element {
  constructor(type, props, children) {
    this.type = type;
    this.props = props || "";
    this.children = children;
  }
  // 转换样式书写格式  fontSize -> font-size
  transStr(str) {
    return str.replace(/[A-Z]/g, (k) => {
      return "-" + k.toLowerCase();
    });
  }
  // 负责把虚拟dom转为真实dom
  render() {
    let ele = document.createElement(this.type); // 创造一个真实的空的dom元素
    // 添加属性
    Object.keys(this.props).forEach((item) => {
      switch (item) {
        case "className":
          ele.setAttribute("class", this.props[item]);
        case "style":
          let str = "";
          let obj = this.props[item];
          Object.keys(obj).forEach((key) => {
            str += `${this.transStr(key)}:${obj[key]};`;
          });
          ele.setAttribute("style", str);
        default:
          break;
      }
    });
    // 添加子节点
    this.children.forEach((item) => {
      // 子节点分两种情况 字符串/Element的实例
      if (typeof item == "string") {
        let textNode = document.createTextNode(item);
        ele.appendChild(textNode);
      } else {
        // 如果是Element的实例 再调用render方法返回真实dom
        ele.appendChild(item.render());
      }
    });
    return ele;
  }
}

let React = {
  createElement(type, props, ...children) {
    // 第三个参数及以后都是子节点
    return new Element(type, props, children);
  },
};

let ReactDOM = {
  render(ele, container) {
    // ele 虚拟dom 调用render生成真实dom
    container.appendChild(ele.render());
  },
};

// React.createElement 参数是 babel编译后的结果 第三个参数及以后都是子节点
// React.createElement 返回的是虚拟dom
let ele = React.createElement(
  // 标签 type
  "div",
  // 属性 props
  {
    style: {
      color: "red",
      fontSize: "50px",
    },
  },
  // 文本节点
  "haha nihao !",
  // Element的实例节点
  React.createElement(
    "h1",
    null,
    "hello word",
    React.createElement("span", null, "wade")
  )
);

/* 
   原始节点
      <div style={{ color: "red" ,fontSize:'50px'}}>
        haha nihao !
        <h1 >
          hello word
          <span>wade</span>
        </h1>
      </div>
  */

ReactDOM.render(ele, document.getElementById("root"));
