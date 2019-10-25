import React from 'react'
// 事件处理
export default class Btn extends React.Component {
    constructor() {
        super();
        this.state = { num: 0 }
        // 需要在constructor中绑定this才能够使render函数中调用的方法正确找到this（因为react对调用方法的this做了一些处理）
        this.addClick = this.addClick.bind(this)
    }

    addClick(param, e) {
        // 这里定义的点击的方法，e是一个react合成的事件，所以不用担心兼容性
        // 但是不同于原生的事件，不能够通过return false来阻止默认的行为，只能通过preventDefault方法
        e.preventDefault();
        this.setState(oldState => {
            console.log(oldState);
            return { num: oldState.num += 1 }
        })
        console.log(param)//param就是传递的参数，e作为react合成的事件，在bind方法传递参数中，需要放在最后
    }

    render() {
        // react的时间处理采用的是驼峰写法，而不是原生js的小写
        // return (<div className='btn' onClick={this.addClick}>点击了{this.state.num}次</div>)

        // 如果需要传入参数，可以在这里采用bind方法，既可以绑定了this，也能够传递参数（就不需要在constroctor中绑定了）
        return (<div className='btn' onClick={this.addClick.bind(this, "这里传的参数")}>点击了{this.state.num}次</div>)

    }

} 