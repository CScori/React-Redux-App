import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchGoT } from '../actions'
import Char from './Char'

const Chars = (props) => {
    useEffect(() => {
        props.fetchGoT()
    }, []);
    
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