import React from 'react'
// 条件渲染，其实就是根据就是js的条件来判断
export default class WelcomeInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: null
        }
    }
    render() {
        // console.log(this.isLogin);
        if (this.state.isLogin) {
            return (<div>欢迎！</div>)
        }
        else if (this.state.isLogin === false) {
            return (<div>请登录</div>)
        }
        // 如果希望不渲染元素，需要在render方法返回null
        else if (this.state.isLogin === null) {
            return null;
        }

    }
}

