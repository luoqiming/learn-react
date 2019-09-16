import React from 'react'
// react创建组件的方式：两种

// 1.通过函数来创建组件(无状态组件，适用于仅展示数据)

// 函数组件的特点：
// ①函数名必须是首字母大写
// ②该函数必须要有返回值，可以是null或者jsx
// ③返回的jsx必须要有一个根元素包裹
function Hello() {
    return (<ul>
        <li>这里是函数式组件</li>
        <li>这里是函数式组件</li>
        <li>这里是函数式组件</li>
    </ul>)
}



// 2.通过class来创建组件(有状态组件，适用于有业务逻辑，要操作数据)
// ①必须继承自React.Component
// ②必须调用render方法，并且此方法必须返回一个null或者react对象
class Hello_class extends React.Component {
    constructor(name) {
        super(name)
        this.name = name;
    }
    render() {
        return (<div>
            这里是class创建的组件
        </div>)
    }
}


export { Hello, Hello_class }