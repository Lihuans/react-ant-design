import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import PageTop from '../pageTop/index'
import PageAside from '../pageAside/index'

export default class MyLayout extends React.Component{
    constructor(props){
        super(props);
        console.log('11111===', props);
    }
    render() {
        return (
            <Layout id="wrapper">
                <PageTop />
                <PageAside>
                    {this.props.children}
                </PageAside>
            </Layout>
        )
    }
}