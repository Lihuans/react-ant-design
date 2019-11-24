import React from 'react';
import Index from './views/index'
import Layout from './components/layout/index'
import WrappedNormalLoginForm from './views/login/login'
// import Options1 from "./views/subnav1/options1";

import options1 from "./views/subnav1/options1";
import options1Detail from "./views/subnav1/detail/detail";
import options2 from "./views/subnav1/options2";

import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom'

// import {
//   // Link,
//   Route,
//   Router,
//   // BrowserRouter,
//   // HashRouter,
//   Switch,
//   // BrowserRouter
// } from 'react-router-dom'

class App extends React.Component{
  render() {
      let LayoutRouter = (
          <Layout>
            <Switch>
              <Route exact path="/" component={options1}/>
              <Route path="/options2" component={ options2 } />
              <Route path="/options/detail/:id" component={ options1Detail } />
              {/*<Route path="/product" component={ProductRouter}/>*/}
              {/*<Route path="/product-category" component={ProductRouter}/>*/}
              {/*<Route path="/order/index" component={OrderList}/>*/}
              {/*<Route path="/order/detail/:orderNumber" component={OrderDetail}/>*/}
              {/*<Route path="/user/index" component={UserList}/>*/}
              {/*<Redirect exact from="/order" to="/order/index"/>*/}
              {/*<Redirect exact from="/user" to="/user/index"/>*/}
              {/*<Route component={ErrorPage}/>*/}
            </Switch>
          </Layout>
      );
      return (
          <Router>
            <Switch>
              <Route path="/login" component={WrappedNormalLoginForm}/>
              <Route path="/" render={ props => LayoutRouter}/>
            </Switch>
          </Router>
      )
  }
}

export default App;
