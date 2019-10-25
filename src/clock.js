import React from "react"
export default class Clock extends React.Component {
    constructor() {
        super();
        // 构造函数中是唯一可以给state赋值的地方
        this.state = {
            date: new Date().toLocaleString()
        }
    }
    render() {
        return (<div className="clock">
            <h1>{this.state.date}</h1>
        </div>)
    }
    // react的钩子
    componentDidMount() {
        setInterval(() => {
            // 1.不能够直接修改state中的属性，必须使用setState方法。这样react才知道属性更新了
            // 2.由于性能原因，react可能会将state的更新作为异步的，这个时候可以让setState方法接收一个函数
            // 3.setState方法会将提供的属性合并到state中，因此可以多次用setState方法来更新不同的属性
            this.setState({ date: new Date().toLocaleString() })
        }, 1000);
    }
}