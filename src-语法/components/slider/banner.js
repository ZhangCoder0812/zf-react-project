import React from "react";

function Banner(props) {
  let { list, index, onInitIndex } = props;
  // 补个数据 实现无缝切换
  list = list.concat({
    ...list[0],
    id: list.length + 1,
  });
  let style = {
    width: list.length * 500 + "px",
  };
  // 是最后一张时 闪到第一张 即把transition过渡效果去掉
  if (index >= list.length) {
    Object.assign(style, {
      transform: `translateX(${0}px)`,
    });
    // 让闪到第一张的dom渲染完成之后 才往第二张轮播 否则红色的警告：不能在正在渲染中更新视图
    setTimeout(() => {
      onInitIndex(1);
    }, 20);
  } else if (index <= -1) {
    // 闪到最后一张 渲染完成之后 向倒数第二张轮播
    Object.assign(style, {
      transform: `translateX(${-list.length * 500}px)`,
    });
    setTimeout(() => {
      onInitIndex(list.length - 2);
    }, 20);
  } else {
    Object.assign(style, {
      transform: `translateX(${-index * 500}px)`,
      transition: "all .3s",
    });
  }

  return (
    <ul className="banner_box" style={style}>
      {list.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}

export default Banner;
