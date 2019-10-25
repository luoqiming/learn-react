import React from "react"
// react路由需要安装react-router-dom包并引入
import { BrowserRouter as Router, Route } from 'react-router-dom';
import page1 from './1.js';
import page2 from './2.js';
import page4 from './4.js';
import page5 from './5.js';
import page6 from './6.js';
import page7 from './7.js';
import { Header } from './8.js';
import { Container } from './9.js';
import page10 from './10.js';
import page11 from './11.js';
// import { Hello, Hello_class } from './3.js';
import clock from './clock.js';
const router_jsx = (
    <Router>
        <div>
            {/* exact 代表精确匹配，多级路由嵌套时候能能够精确匹配到 */}
            <Route exact path="/" component={page1} />
            <Route path="/page2" component={page2} />
            <Route path="/clock" component={clock} />
            <Route path="/page4" component={page4} />
            <Route path="/page5" component={page5} />
            <Route path="/page6" component={page6} />
            <Route path="/page7" component={page7} />
            <Route path="/page8" component={Header} />
            <Route path="/page9" component={Container} />
            <Route path="/page10" component={page10} />
            <Route path="/page11" component={page11} />
            {/* <Route path="/page3" component={Hello_class} /> */}
        </div>
    </Router>)


export default class router extends React.Component {
    render() {
        return router_jsx
    }
}