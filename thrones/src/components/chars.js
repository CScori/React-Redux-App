import React from 'react'
import Char from './Char'
import { connect } from 'react-redux'
const Chars = () => {
    return (
        <div>
           <Char />
            all
        </div>
    )
}


const mapStateToProps = state => {
    return{
        gOT: state.gOT,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, null)(Chars)