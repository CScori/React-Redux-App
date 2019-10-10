import React from 'react'
import styled from 'styled-components'

const Hold = styled.div`
width: 200px;
border-radius: 20px;
background: blue;
display: flex;
flex-direction: row;
flex-wrap: wrap;
color: white;




`

const char = props => {

    console.log('single', props)
    return (

        <Hold>
            <div>
            <h5>My name is: </h5>
            {props.got.name}{props.got.aliases}
            <p> Culture: {props.got.culture}</p>
            </div>
        </Hold>
    )
}

export default char
