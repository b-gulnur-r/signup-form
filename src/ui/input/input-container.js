import React from "react"
import { string, element } from "prop-types"
import styled from "styled-components"
import { Error } from "./error"

const Row = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 8px;
`

const Label = styled.label`
  padding-bottom: 5px;
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.grey[0]};
`

export const InputContainer = ({ id, label, children }) => {
  return (
    <Row>
      <Label forname={id}>{label}</Label>
      {children}
      <Error id={id} />
    </Row>
  )
}

InputContainer.propTypes = {
  id: string,
  label: string,
  children: element,
}
