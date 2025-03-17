import styled from "styled-components"

export const Input = (props) => {
  return <StyledInput {...props} />
}

const StyledInput = styled.input`
    border: none;
    outline: none;
    border: 1px solid grey;
    padding: 10px 15px;
    border-radius: 8px;
    width: 100%;
    display: block;
`