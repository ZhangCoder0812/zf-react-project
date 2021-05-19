import React, { useEffect, useState } from "react";
import Banner from "./components/slider/banner";
import Arrow from "./components/slider/arrow";
import Tips from "./components/slider/tips";
import "./Slider.css";

function App() {
    let timer = null;
    let [list, setList] = useState([
        { id: 1, text: "詹姆斯" },
        { id: 2, text: "科比" },
        { id: 3, text: "杜兰特" },
        { id: 4, text: "韦德" },
    ]);
    let [index, setIndex] = useState(0); // 控制显示图片的索引
    const move = () => {
        timer = setInterval(() => {
            setIndex(index + 1);
        }, 1000);
    };
    // dom 加载完成之后执行 mouted
    // 第二个参数为空数组时 只会执行一次 即页面不会再更新，每当index改变 就执行一次
    useEffect(() => {
        move();
        return () => {
            // 返回的这个函数会在下一次useEffect执行之前执行
            clearInterval(timer);
        };
    }, [index]);
    // 重置index
    const initIndex = n => {
        setIndex(n);
    };
    return (
        <div className="box" onMouseEnter={() => clearInterval(timer)} onMouseLeave={() => move()}>
            <Banner list={list} index={index} onInitIndex={initIndex}></Banner>
            <Arrow onLeft={() => setIndex(index - 1)} onRight={() => setIndex(index + 1)}></Arrow>
            <Tips></Tips>
        </div>
    );
}

export default App;
