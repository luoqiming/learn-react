import React from "react"
// refs和dom
// react提供了一种形式，能够访问dom节点或者react创建的元素
// 注意只能在class组件中使用，函数组件中不能使用
export default class Container extends React.Component {
    constructor(props) {
        super(props);
        // 1.使用React.createRef方法来创建一个refs
        this.myRef = React.createRef();
        // 多个refs需要创建多个
        this.myRefp = React.createRef();
    }
    render() {
        return (
            // 2.在dom中将创建的refs赋值给dom元素的ref属性
            <div ref={this.myRef} onClick={this.doClick.bind(this)}>
                123214343654
                <p ref={this.myRefp} onClick={this.doClickp.bind(this)}>gfgfggfdgdf</p>
            </div>
        )
    }

    doClick() {
        // 获取refs，通过refs的current属性
        console.log(this.myRef.current);
    }

    doClickp(e) {
        e.stopPropagation();
        console.log(this.myRefp.current);
    }
}

// React 会在组件挂载时给 current 属性传入 DOM 元素，并在组件卸载时传入 null 值。
// refs 会在 componentDidMount 或 componentDidUpdate 生命周期钩子触发前更新。


