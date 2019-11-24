import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import {
    Link,
    NavLink,
    Route,
    Router,
    HashRouter,
    Switch,
    BrowserRouter
} from 'react-router-dom'

const { SubMenu } = Menu;
const { Content, Sider } = Layout;



class PageAside extends React.Component {
    constructor(props){
        super(props);
        console.log('2222===', props);
    }
    render() {
        return (
            <Content style={{padding: '0 50px'}}>
                <Breadcrumb style={{margin: '16px 0'}}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Layout style={{padding: '24px 0', background: '#fff'}}>
                    <Sider width={200} style={{background: '#fff'}}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{height: '100%'}}
                        >
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                  <Icon type="user"/>
                  subnav 1
                </span>
                                }
                            >
                                <Menu.Item key="1"><NavLink to="/">option1</NavLink></Menu.Item>
                                <Menu.Item key="2"><NavLink to="/options2">option2</NavLink></Menu.Item>
                                <Menu.Item key="3">option3</Menu.Item>
                                <Menu.Item key="4">option4</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={
                                    <span>
                  <Icon type="laptop"/>
                  subnav 2
                </span>
                                }
                            >
                                <Menu.Item key="5">option5</Menu.Item>
                                <Menu.Item key="6">option6</Menu.Item>
                                <Menu.Item key="7">option7</Menu.Item>
                                <Menu.Item key="8">option8</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub3"
                                title={
                                    <span>
                  <Icon type="notification"/>
                  subnav 3
                </span>
                                }
                            >
                                <Menu.Item key="9">option9</Menu.Item>
                                <Menu.Item key="10">option10</Menu.Item>
                                <Menu.Item key="11">option11</Menu.Item>
                                <Menu.Item key="12">option12</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Content style={{padding: '0 24px', minHeight: 280}}>
                        {this.props.children}
                        {/*<Switch>*/}
                        {/*    <Route exact path="/" component={ options1 } />*/}
                        {/*    <Route path="/options2" component={ options2 } />*/}
                        {/*</Switch>*/}
                        {/*<Route path="/Pagebutton" component={ Pagebutton } />*/}
                        {/*<Route path="/Test1" component={ Test1 } />*/}
                    </Content>
                </Layout>
            </Content>
        );
    }
}

export default PageAside;
