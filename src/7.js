import React from 'react'
// 表单
export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "mike",
            desc: "my name is mike",
            color: "blue",
            check: true
        }
    }

    inputChange(e) {
        // 需要调用persist方法，不然会报错
        e.persist();
        this.setState(
            { "name": e.target.value }
        )
    }

    textareaChange(event) {
        event.persist();
        this.setState(
            { "desc": event.target.value }
        )
    }

    selectChange(event) {
        event.persist();
        // console.log(event);
        this.setState(
            { "color": event.target.value }
        )
    }

    boxChange(event) {
        event.persist();
        this.setState(
            { "check": event.target.checked }
        )
    }

    doSubmit() {
        console.log(this.state);
        alert(this.state);
    }

    render() {

        return (<form onSubmit={this.doSubmit.bind(this)}>
            <ul>
                {/* 将表单的vlaue值和state绑定，并且绑定change事件，重新赋值 */}
                <li><input value={this.state.name} onChange={this.inputChange.bind(this)} /></li>
                {/* textarea与input基本相同 */}
                <li><textarea value={this.state.desc} onChange={this.textareaChange.bind(this)} /></li>
                {/* 对于select标签来说，只需要在根select属性上绑定value */}
                <li>
                    <select value={this.state.color} onChange={this.selectChange.bind(this)} >
                        <option value="blue">蓝色</option>
                        <option value="yellow">黄色</option>
                        <option value="red">红色</option>
                    </select>
                </li>
                {/* 对于checkbox，绑定的是checked值 */}
                <li><input type="checkbox" checked={this.state.check} onChange={this.boxChange.bind(this)} /></li>
                <li><input type="submit" /></li>
            </ul>
        </form>)
        // 以上这种，由react组件来管理状态的模式，叫做受控组件。还有其他非受控组件的形式。
    }
}

