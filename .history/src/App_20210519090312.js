import React from 'react'
import ReactDOM from 'react-dom'

class Child extends React.Component{
  shouldComponentUpdate(){
    return true
  }
  render(){
    console.log('render')
    return <div>子组件</div>
  }
}

class App extends React.Component{
  shouldComponentUpdate(){
    return true
  }
  render(){
    return <div>子组件</div>
  }
}