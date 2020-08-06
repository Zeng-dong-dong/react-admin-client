import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from "./pages/login/login";
import Admin from "./pages/admin/admin";
/*
应用根组件
*/
class App extends Component {

  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Login}></Route>
                <Route path='/admin' component={Admin}>Admin</Route>
            </Switch>
        </BrowserRouter>
    )
  }
}
export default App