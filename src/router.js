import React from "react"
// react路由需要安装react-router-dom包并引入
import { BrowserRouter as Router, Route } from 'react-router-dom';
import page1 from './1.js';
import page2 from './2.js';
import { Hello, Hello_class } from './3.js';
const router_jsx = (
    <Router>
        <div>
            {/* exact 代表精确匹配，多级路由嵌套时候能能够精确匹配到 */}
            <Route exact path="/" component={page1} />
            <Route path="/page2" component={page2} />
            <Route path="/page3" component={Hello} />
            <Route path="/page4" component={Hello_class} />
        </div>
    </Router>)


export default class router extends React.Component {
    render() {
        return router_jsx
    }
}