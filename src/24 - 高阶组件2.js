// 高阶组件 HOC ：就是一个函数接受一个组件并返回一个组件。 本质 高阶函数

function connect(Com) {
  return function (props) {
    console.log(props); // {className: "我是父组件传的值"}
    return <Com name="lbj" age="12"></Com>;
  };
}

function App(props) {
  console.log(props); // {name: "wade", age: "12"}
  return <div>App</div>;
}

App = connect(App);

// index.js中 <App className="我是父组件传的值" /> 使用组件的时候传的参数在App的props中获取不到
// 因为 这个App组件的props获取的是 connect 方法里返回的那个组件上传的属性
// 要想获取 className 要在 connect 内部在接受一下

export default App;
