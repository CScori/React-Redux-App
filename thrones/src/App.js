import React from 'react';
import Chars from './components/Chars'
import styled from 'styled-components'

const Wrap = styled.div`
max-width: 70%;
align-content: center;
margin-left: 35%;
background-image: url(https://unsplash.com/photos/MUBYGNI4gM0)



`

function App() {
  return (
    <Wrap>
      <h1>Game Of Thrones</h1>
      <h3>The People</h3>
      <Chars /> 
    </Wrap>
  );
}

export default App;
