// 组件的生命周期，组件的生命周期包含三个阶段

// 一.创建阶段

// 1.constructor()，获取props以及初始化state

// 2.componentWillMount()，组件被挂载到页面之前调用，其在render()之前被调用
// 注意：
// 因为在挂在之前，所以无法获取到dom元素
// 但是可以调用setState来更改状态值,
// 一般可以用来发送ajax请求获取数据

// 3.render()，将组件渲染到dom中，
// 注意：
// 这里也无法获取到dom对象，因为react在这里正在挂载
// 不要在这里调用setState()方法，因为会造成render函数的递归调用

// 4.componentDidMount()，元素挂载完成之后
// 注意：
// 这里就可以获取得到dom元素
// 也能够发送ajax请求
// 也能够调用setState()，调用后react会重新渲染


// 二.运行和交互阶段
// 1.componentWillReceiveProps(nextProps),每当组件的props或者state发生改变的时候都会调用
// 参数：新接收到的props
// 注意：
// 可以通过this.props获取到上一次props的值
// 使用setState()来修改state不能触发该方法

// 2.shouldComponentUpdate(nextProps，nextState)，此方法根据返回值来决定是否重新渲染组件
// - 参数：
// - 第一个参数：最新属性对象
// - 第二个参数：最新状态对象
// 注意：此方法必须返回布尔值，如果是false就不会调用render()方法重新渲染

// 3.componentWillUpdate(nextProps, nextState)，组件将要更新
// - 参数：
// - 第一个参数：最新属性对象
// - 第二个参数：最新状态对象
// 注意：
// 不能够在这里调用setState()去修改state中的值,会早晨死循环

// 4.componentDidUpdate(prevProps, prevState)，组件已经更新完成
// 参数：
// - 第一个参数：之前的属性对象
// - 第二个参数：之前的状态对象


// 三.卸载阶段
// 1.componentWillUnmount()，组件在被销毁之前
// 注意:
// 一般用作清理工作，如清楚定时器
