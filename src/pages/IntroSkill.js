import React from 'react'
import styled from 'styled-components'

const IntroBox = styled.div`
    position: absolute;
    bottom:10%;
    left:40%;
    width: 800px;
    height: auto;
    p{
        font-size: 4rem;
        padding: 2rem;
    }
`

const MainTag = styled.div`
    width:100%;
`
function IntroSkill() {
  return (
    <IntroBox>
        <MainTag>
            <p>박상훈</p>
            <p>010-2274-8146</p>
        </MainTag>
    </IntroBox>
  )
}

export default IntroSkill
