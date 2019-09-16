import React from "react"
export default class page1 extends React.Component {
    render() {
        // React采用的是虚拟的dom，通过createElement方法来实现创建一个元素
        // 参数1：元素的标签名，参数2：元素属性的对象(null表示无) 参数3：当前元素的子元素，string或者是React.createElement方法的返回值
        const divVD = React.createElement("div", {
            title: "这里是div的title"
        }, "hello,这个是用react的creatElement方法创建的div元素")

        // jsx
        // 因为用React.createElement方法创建复杂的嵌套元素结构很麻烦，因此推荐采用jsx语法（最终还是会编译成createElement方法）
        const type = 2;
        const val1 = "hello，world1！";
        const val2 = "hello，world2！";
        // 注意：
        //1.可以在jsx语法外面用小括号括起来，目的是为了防止分号插入的bug
        //2.在jsx语法中，标签的class需要写成className/类似的还有label标签的for属性需要写成htmlFor
        //3.jsx中的使用js代码需要用{}括起来
        //4.在jsx中注释语法：{/* 中间是注释的内容 */}
        const p = (<h1 className="p_red">{type === 1 ? val1 : val2}</h1>)
        return p;
    }
}