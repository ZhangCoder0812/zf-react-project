import React from "react";

class Home extends React.Component {
  render() {
    // console.log(this.props); 这里能拿到路由信息 因为home是通过Route标签渲染的
    // 需要自己手动获取传的参数
    // console.log(this.props.location.search.match(/([^?=&]+)=([^?=&]+)/g)); //["id=1", "name=wade"]
    let obj = {};
    this.props.location.search.replace(/([^?=&]+)=([^?=&]+)/g, (a, b, c) => {
      obj[b] = c;
    });
    console.log(obj); // {id: "1", name: "wade"}
    return <div>Home</div>;
  }
}

export default Home;
