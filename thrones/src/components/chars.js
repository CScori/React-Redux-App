import React, { useEffect } from 'react'
import Char from './Char'
import { connect } from 'react-redux'
import { fetchGoT } from '../actions'
const Chars = (props) => {
    return (
        <div>
           <Char />
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

export default connect(mapStateToProps, { fetchGoT })(Chars)