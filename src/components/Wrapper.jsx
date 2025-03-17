import React from 'react'
import styled from 'styled-components'

export const Wrapper = ({children}) => {
  return (
    <StyledWrapper>{children}</StyledWrapper>
  )
}

const StyledWrapper = styled.div`
    width: 1000px;
    max-width: 100%;
    margin: 100px auto;
`