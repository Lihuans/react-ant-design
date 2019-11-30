import React from '_react@16.11.0@react'

import { Row, Col, Button } from 'antd';
import './eduaction.scss'

export default class EduactionShow extends React.Component {
    constructor (props) {
        super(props)
        console.log('detail==', props)
        this.editFun = this.editFun.bind(this)
        this.delFun = this.delFun.bind(this)
        this.state = {
            data: this.props.data
        }
    }

    editFun () {
        this.props.emitEdit()
    }
    delFun () {
        this.props.emitDel()
    }

    render() {
        // const { school, major, degree, date, course } = this.state.data
        const item = this.state.data
        return (
            <div>
                <Row gutter={16}>
                    <Col className="gutter-row" span={10}>
                        <div>
                            <h2>{item.school}</h2>
                            <p>
                                <span>{item.school}</span>
                                <span>{item.major}</span>
                                <span>{item.degree}</span>
                            </p>
                            <p>
                                <span>{item.date}</span>
                                <span>{item.course}</span>
                            </p>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={2}>
                        <Button type="primary" onClick={this.editFun}>编辑</Button>
                        <Button type="primary" onClick={this.delFun}>删除</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}