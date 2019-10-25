import React from "react"
// 为class组件添加refs，步骤和为dom元素添加refs是相同的
class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            txt: "这里是example的事例"
        }
    }
    render() {
        return (
            <p style={{ border: "1px solid #000000" }}>{this.state.txt}</p>
        )
    }
    sayHi() {
        alert(this.state.txt);
    }
}


export default class Box extends React.Component {
    constructor(props) {
        super(props);
        this.example = React.createRef();
    }
    componentDidMount() {
        // 通过refs可以调用绑定的class中的方法
        this.example.current.sayHi();
    }
    render() {
        return (<h1>
            <Example ref={this.example}></Example>
        </h1>)
    }
}




