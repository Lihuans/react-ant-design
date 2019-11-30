import React from '_react@16.11.0@react'

import BaseInfo from './components/baseInfo'
import Education from './components/eduaction'

export default class Detail extends React.Component {
    constructor (props) {
        super(props)
        console.log('detail==', props)
    }

    render() {
        return (
            <div>
                <BaseInfo></BaseInfo>
                <Education></Education>
            </div>
        );
    }
}
