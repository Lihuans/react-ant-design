import React from '_react@16.11.0@react'
import moment from 'moment';

import {
    Form,
    Select,
    Input,
    InputNumber,
    Switch,
    Radio,
    DatePicker,
    Slider,
    Button,
    Upload,
    Icon,
    Rate,
    Checkbox,
    Row,
    Col,
} from '_antd@3.25.0@antd/lib/index';

const { MonthPicker } = DatePicker;

const { Option } = Select;

class DetailForm extends React.Component {
    constructor (props) {
        super(props)
        console.log('detail==', props)
        this.cancelSubmit = this.cancelSubmit.bind(this)
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    normFile = e => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    cancelSubmit () {
        this.props.cancelSubmit()
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
            // colon: false
        };
        // const options = ['red', 'green', 'blue']
        return (
            <div>
                <Row gutter={16}>
                    <Col className="gutter-row text-align-center" span={4}>
                        <img className="headPic" src="https://sxsimg.xiaoyuanzhao.com/DE/5D/DE40EA6FD64D7A50F52590DA7CBE1D5D.png" alt=""/>
                    </Col>
                    <Col className="gutter-row" span={18}>
                        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                            <Row gutter={16}>
                                <Col className="gutter-row text-align-center" span={10}>
                                    <Form.Item label="姓名" hasFeedback>
                                        {getFieldDecorator('name', {
                                            rules: [
                                                { required: true, message: '请输入姓名!' },
                                            ],
                                        })(
                                            <Input placeholder="请输入姓名" />
                                        )}
                                    </Form.Item>
                                </Col>
                                <Col className="gutter-row text-align-center" span={10}>
                                    <Form.Item label="所在城市">
                                        {getFieldDecorator('city', {
                                            rules: [
                                                { required: true, message: '请选择所在城市!' },
                                            ],
                                        })(
                                            <Select placeholder="请选择所在城市">
                                                {['北京', '上海', '广州'].map((val) =>
                                                    <Option value={val} key={val}>{val}</Option>
                                                )}
                                            </Select>
                                        )}
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col className="gutter-row text-align-center" span={10}>
                                    <Form.Item label="性别">
                                        {getFieldDecorator('sex')(
                                            <Radio.Group>
                                                <Radio value="0">男</Radio>
                                                <Radio value="1">女</Radio>
                                            </Radio.Group>,
                                        )}
                                    </Form.Item>
                                </Col>
                                <Col className="gutter-row text-align-center" span={10}>
                                    <Form.Item label="电话号码" hasFeedback>
                                        {getFieldDecorator('phone', {
                                            rules: [
                                                { required: true, message: '请输入电话号码!' },
                                            ],
                                        })(
                                            <Input placeholder="请输入电话号码" />
                                        )}
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col className="gutter-row text-align-center" span={10}>
                                    <Form.Item label="出生年月" hasFeedback>
                                        {getFieldDecorator('birth', {
                                            rules: [
                                                { required: true, message: '请输入出生年月!' },
                                            ],
                                        })(
                                            <MonthPicker className="full-line" format="YYYY-MM" placeholder="请输入出生年月" />
                                        )}
                                    </Form.Item>
                                </Col>
                                <Col className="gutter-row text-align-center" span={10}>
                                    <Form.Item label="邮箱" hasFeedback>
                                        {getFieldDecorator('email', {
                                            rules: [
                                                { required: true, message: '请输入邮箱!' },
                                            ],
                                        })(
                                            <Input placeholder="请输入邮箱" />
                                        )}
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                                <Button onClick={this.cancelSubmit}>Cancel</Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Form.create({ name: 'validate_other' })(DetailForm);