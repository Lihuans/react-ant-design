import React from '_react@16.11.0@react'
import EducationShow from './eduaction/eduactionShow'
import EducationForm from './eduaction/eduactionForm'

import { Row, Col, Button } from 'antd';

export default class Education extends React.Component {
    constructor (props) {
        super(props)
        console.log('detail==', props)
        this.editFun = this.editFun.bind(this)
        this.cancelSubmit = this.cancelSubmit.bind(this)
        this.submit = this.submit.bind(this)
        this.addFun = this.addFun.bind(this)
        this.delFun = this.delFun.bind(this)
        this.state ={
            edit: '',
            data: [
                {
                    school: '111',
                    major: '本科',
                    degree: '本科',
                    date: '',
                    course: '饿温热我认为微软'
                },
                {
                    school: '2222',
                    major: '本科',
                    degree: '本科',
                    date: '',
                    course: '饿温热我认为微软'
                }
            ]
        }
    }

    editFun (val) {
        console.log('val', val);
        this.setState({
            edit: val
        })
    }
    addFun (val) {
        let data = {
            school: 'ere',
            major: '343',
            degree: '53',
            date: '',
            course: '543'
        }
        this.setState({
            data: [...this.state.data, data]
        })
    }
    delFun (idx) {
        console.log(this.state.data, idx);
        this.setState({
            data: this.state.data.splice(idx, 1)
        })
        console.log(this.state.data, idx);
    }
    submit (idx, val) {
        console.log(idx, val);
        let dd = this.state.data
        dd[idx] = val
        this.setState({
            data: dd
        })
    }

    cancelSubmit (data) {
        this.setState({
            edit: ''
        })
    }

    render() {
        const edit = this.state.edit;
        let data = this.state.data
        console.log('======', data);
        return (
            <div>
                <h1>教育背景</h1>
                {
                    data.map((item, idx) => {
                        return (
                            <div>
                                {
                                    edit === idx ?
                                        <EducationForm cancelSubmit={this.cancelSubmit} data={item} emitSubmit={e => this.submit(idx, e)}></EducationForm> :
                                        <EducationShow emitEdit={(e) => this.editFun(idx, e)} data={item} emitDel={e => this.delFun(idx, e)}></EducationShow>
                                }
                            </div>
                        )
                    })
                }
                {
                    edit === '' ?
                        <Button type="primary" onClick={this.addFun}>添加</Button> :
                        null
                }

            </div>
        );
    }
}