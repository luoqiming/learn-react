import React from "react"
// 组合，有点类似于vue中的插槽
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <RightBox>
                {/* 在组件内部写入jsx，这里将直接已props.children的形式传递到子组件中 */}
                <p>这里是通过children props传递到子组件中的文本</p>
            </RightBox>
        )
    }
}

class RightBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        // console.log(props)
    }
    render() {
        return (
            <div>
                <p>这是RightBox本身就具有的文本</p>
                {this.props.children}
            </div>
        )
    }
}

export { Header }