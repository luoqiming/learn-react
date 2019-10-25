import React from 'react'
// 渲染列表组件
// 就是利用map方法去返回每一项，跟jsx结合起来
export default class NumberList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberArr: [1, 3, 6, 0, 4, 67, 43, 9, 35, 1246, 87, 34, 26, 8, 90]
        }
    }

    render() {
        return (<ul>{this.state.numberArr.map(item => {
            // 注意需要给每一项一个key，以便react识别那些元素发生了变化
            // 请注意在哪里遍历，就在哪里指定key
            return <li key={item}>{item}</li>;
        })}</ul>)
    }
}

