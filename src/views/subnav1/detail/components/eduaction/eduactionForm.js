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
const { TextArea } = Input;

const { Option } = Select;

class DetailForm extends React.Component {
    constructor (props) {
        super(props)
        console.log('detail==', props)
        this.cancelSubmit = this.cancelSubmit.bind(this)
        this.state = {
            data: this.props.data
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.emitSubmit(values)
                this.cancelSubmit()
            }
        });
    };

    cancelSubmit () {
        // this.props.form.resetFields()
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
                    <Col className="gutter-row" span={18}>
                        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                            <Row gutter={16}>
                                <Col className="gutter-row text-align-center" span={10}>
                                    <Form.Item label="学校" hasFeedback>
                                        {getFieldDecorator('school', { initialValue: this.state.data.school }, {
                                            rules: [
                                                { required: true, message: '请输入学校!' },
                                            ]
                                        })(
                                            <Input placeholder="请输入学校" />
                                        )}
                                    </Form.Item>
                                </Col>
                                <Col className="gutter-row text-align-center" span={10}>
                                    <Form.Item label="学历">
                                        {getFieldDecorator('degree', { initialValue: this.state.data.degree }, {
                                            rules: [
                                                { required: true, message: '请选择学历!' },
                                            ],
                                        })(
                                            <Select placeholder="请选择学历">
                                                {['大专', '本科', '硕士', '博士', '其他'].map((val) =>
                                                    <Option value={val} key={val}>{val}</Option>
                                                )}
                                            </Select>
                                        )}
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col className="gutter-row text-align-center" span={10}>
                                    <Form.Item label="专业" hasFeedback>
                                        {getFieldDecorator('major', { initialValue: this.state.data.major }, {
                                            rules: [
                                                { required: true, message: '请输入专业!' },
                                            ],
                                        })(
                                            <Input placeholder="请输入专业" />
                                        )}
                                    </Form.Item>
                                </Col>
                                <Col className="gutter-row text-align-center" span={10}>
                                    <Form.Item label="在校时间" hasFeedback>
                                        {getFieldDecorator('date', { initialValue: this.state.data.date }, {
                                            rules: [
                                                { required: true, message: '请输入在校时间!' },
                                            ],
                                        })(
                                            <MonthPicker className="full-line" format="YYYY-MM" placeholder="请输入出生年月" />
                                        )}
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col className="gutter-row text-align-center" span={20}>
                                    <Form.Item label="主修课程" hasFeedback>
                                        {getFieldDecorator('course', { initialValue: this.state.data.course }, {
                                            rules: [
                                                { required: true, message: '请输入主修课程!' },
                                            ],
                                        })(
                                            <TextArea rows={4} />
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