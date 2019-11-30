import React from '_react@16.11.0@react'
import BaseInfoShow from './baseInfo/baseInfoShow'
import BaseInfoForm from './baseInfo/baseInfoForm'

export default class BaseInfo extends React.Component {
    constructor (props) {
        super(props)
        console.log('detail==', props)
        this.editFun = this.editFun.bind(this)
        this.cancelSubmit = this.cancelSubmit.bind(this)
        this.state ={
            edit: ''
        }
    }

    editFun (val) {
        this.setState({
            edit: val
        })
    }

    cancelSubmit () {
        this.setState({
            edit: ''
        })
    }

    render() {
        const edit = this.state.edit;
        return (
            <div>
                {
                    edit === '' ?
                        <BaseInfoShow emitEdit={this.editFun}></BaseInfoShow> :
                        <BaseInfoForm cancelSubmit={this.cancelSubmit}></BaseInfoForm>
                }
            </div>
        );
    }
}