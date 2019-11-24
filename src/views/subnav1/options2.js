import React from 'react'
import {
    Link,
} from 'react-router-dom'

export default class Options1 extends React.Component{
    constructor (props) {
        super(props)
        console.log(props)
    }

    render() {
        return (
            <div>
                <h1>options2</h1>
                <Link to="/">to Options1</Link>
            </div>
        )
    }
}