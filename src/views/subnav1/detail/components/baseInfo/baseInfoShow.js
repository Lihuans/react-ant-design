import React from '_react@16.11.0@react'

import { Row, Col, Button } from 'antd';
import './baseInfoShow.scss'

export default class BaseInfoShow extends React.Component {
    constructor (props) {
        super(props)
        console.log('detail==', props)
        this.editFun = this.editFun.bind(this)
    }

    editFun (val, e) {
        console.log(val, e);
        this.props.emitEdit(val)
    }

    render() {
        return (
            <div>
                <Row gutter={16}>
                    <Col className="gutter-row text-align-center" span={4}>
                        <img className="headPic" src="https://sxsimg.xiaoyuanzhao.com/DE/5D/DE40EA6FD64D7A50F52590DA7CBE1D5D.png" alt=""/>
                    </Col>
                    <Col className="gutter-row" span={10}>
                        <div>
                            <h2>Lh</h2>
                            <p>
                                <span>男</span>
                                <span>19</span>
                                <span>北京市</span>
                            </p>
                            <p>
                                <span>18790908909</span>
                                <span>lh@qq.com</span>
                            </p>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={2}>
                        <Button type="primary" onClick={this.editFun.bind(this, '1')}>编辑</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}