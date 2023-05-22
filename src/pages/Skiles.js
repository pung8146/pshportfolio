import React from 'react'
import styled from 'styled-components'

import WesternBackgroundImg  from '../assets/images/Background/WesternBackground.png'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${WesternBackgroundImg});
  background-size: cover;
  background-position: right;
`


function Skiles() {
  return (
    <Wrapper></Wrapper>
  )
}

export default Skiles