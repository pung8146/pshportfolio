import React from 'react'
import styled from 'styled-components'

import PokeBackgroundImg  from '../assets/images/Background/pokeBackground.jpg'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${PokeBackgroundImg});
  background-size: 100% 100%;
`


function Skiles() {
  return (
    <Wrapper></Wrapper>
  )
}

export default Skiles