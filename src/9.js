import React from "react"
// 组合，有点类似于vue中的插槽
class Container extends React.Component {
    render() {
        return (
            // 也可以不通过默认的children字段，可以自定义名称通过props字段，向子组件传递jsx
            // 从而完成组合
            <Box left={<Left></Left>} right={<Right></Right>}>
            </Box>
        )
    }
}

class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <p>this is box</p>
                {this.props.left}
                {this.props.right}
            </div>
        )
    }
}

class Right extends React.Component {
    render() {
        return (
            <p>this is right</p>
        )
    }
}

class Left extends React.Component {
    render() {
        return (
            <p>this is left</p>
        )
    }
}

export { Container }

