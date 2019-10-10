import React from 'react'
import Char from './Char'
import { connect } from 'react-redux'
const chars = () => {
    return (
        <div>
           <Char />
            all
        </div>
    )
}


const mapStateToProps = state => {
    return{
        thrones: state.thrones
    }
}

export default connect(mapStateToProps, null)(Chars)