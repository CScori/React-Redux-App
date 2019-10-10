import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchGoT } from '../actions'
import Char from './Char'

const Chars = (props) => {
    useEffect(() => {
        props.fetchGoT()
    }, []);

    if (props.isFetching) {
        return <h3>Loading Ice and Fire...</h3>
    }

    return (
        <div>
            {props.error && <p>{props.error}</p>}
            {props.gOT.map(got => (
                <Char key={got.url}  got={got}/>
            ))}

        </div>
    )
}


const mapStateToProps = state => {
    console.log('chars state', state)
    return {
        gOT: state.gOT,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchGoT })(Chars)