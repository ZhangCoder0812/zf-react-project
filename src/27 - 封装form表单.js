import React, { useContext, useState } from "react";

const FormContext = React.createContext();
const ItemContext = React.createContext();

function Input() {
  let context = useContext(ItemContext);
  console.log(context); // 这个上下文拿到的是 From 和 Item 传来的数据
  // 这里value用useState处理是为了改变input的值 触发视图更新
  let value = context.initialValues[context.name];
  let [val, setVal] = useState(value);
  return (
    <>
      {context.label}
      <input
        type="text"
        value={val}
        onChange={(e) => {
          // 要把原始数据的值改变
          context.initialValues[context.name] = e.target.value;
          setVal(e.target.value);
        }}
      />
    </>
  );
}

function Button(props) {
  let { onFinish } = useContext(ItemContext);
  return (
    <>
      <button onClick={onFinish}>{props.children}</button>
    </>
  );
}

function Form(props) {
  let { initialValues, onFinish, children } = props;
  // 这里创建一个上下文是为了 将initialValues, onFinish 传下去给input和button使用
  // children是只读的 没法操作 没法传 所以使用上下文对象
  return (
    <FormContext.Provider value={{ initialValues, onFinish }}>
      {children}
    </FormContext.Provider>
  );
}

function Item(props) {
  let context = useContext(FormContext);
  // 这个conext是Form传来的 initialValues, onFinish 当然这个接受 也可以直接在Input中接受
  // 因为都是Form的children 。 合理的写法是在这里接受 一层层传递下去 并且在类组件中static没法写多个接受。
  let { children, label, name } = props;
  // 这里再创造一个上下文对象是把 Item上的 label, name 传给input
  // 同时把 initialValues 传给input , onFinish传给button
  return (
    <ItemContext.Provider
      value={{
        label,
        name,
        ...context,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
}

Form.Item = Item;
//================= 以上是封装的组件，以下是业务中使用的组件 ==========
class App extends React.Component {
  state = {
    initValue: {
      name: "wade",
      age: 12,
    },
  };
  onFinish = () => {
    console.log("提交", this.state.initValue);
  };
  render() {
    return (
      <div className="">
        <Form initialValues={this.state.initValue} onFinish={this.onFinish}>
          <Form.Item label="用户名" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="年龄" name="age">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button>提交</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

// Form Item Button Input 他们都是App的子组件
// 在App内部 它们都是嵌套关系 相互之间没有父子关系
// 但单独组件的内部有父子关系 因为有 {children} 里面包含了组件
// 父子组件：在父组件内部使用了子组件(注意：是模版内部)

export default App;
