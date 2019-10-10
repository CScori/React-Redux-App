import React from 'react'

const char = props => {
    
    console.log('single', props)
    return (
        <div className='char display'>
            <h5>My name is: </h5>
                <div>
                {props.got.name}
                <p>{props.got.aliases}</p>
       <p> Culture: {props.got.culture}</p>
                
                </div>
         
        
        
       
        </div>
    )
}

export default char
