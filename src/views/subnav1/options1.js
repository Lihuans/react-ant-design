import React from 'react'
import { Table, Divider, Modal, Button } from 'antd';

import { Link }     from 'react-router-dom';

const { confirm } = Modal;

export default class Options1 extends React.Component{
    constructor (props) {
        super(props)
        console.log(props)
    }

    delDialog () {
        confirm({
            title: '提示',
            content: '确认要删除该项吗?',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }
    render() {
        const dataSource = [
            {
                key: '1',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号',
                edit: '11'
            },
            {
                key: '2',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号',
            },
        ];

        const columns = [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: '住址',
                dataIndex: 'address',
                key: 'address',
                render: (text) => <a href="/options/detail">{text}</a>
            },
            {
                title: '编辑',
                dataIndex: 'edit',
                key: 'edit',
                render: (text, record) => {
                    return (
                        <span>
                            <Link to={`/options/detail/${record.key}`}>Invite {record.name}</Link>
                            <Divider type="vertical" />
                            <a onClick={e => this.delDialog(e)}>Delete {text}</a>
                        </span>
                    )
                }
            },
        ];

        return (
            <Table dataSource={dataSource} columns={columns} />
        )
    }
}