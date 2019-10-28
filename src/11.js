import React from "react"
// 编程化的导航跳转需要引入withRouter模块
import { withRouter } from "react-router-dom";
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
            <div>
                <p style={{ border: "1px solid #000000" }}>{this.state.txt}</p>
                <span onClick={this.go.bind(this)}>点我进行跳转</span>
            </div>
        )
    }
    sayHi() {
        alert(this.state.txt);
    }
    go() {
        this.props.history.push("page2");
        // console.log(this.props.history);
    }
}

class Box extends React.Component {
    constructor(props) {
        super(props);
        this.example = React.createRef();
    }
    componentDidMount() {
        // 通过refs可以调用绑定的class中的方法
        this.example.current.sayHi();
    }
    render() {
        const history = this.props.history;
        return (<h1>
            {/* 需要传递history进去，不然子组件的跳转方法报undefined */}
            <Example ref={this.example} history={history}></Example>
        </h1>)
    }
}


export default withRouter(Box)




