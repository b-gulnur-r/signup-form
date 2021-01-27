import React from "react"
import { string } from "prop-types"
import styled from "styled-components"

const Text = styled.span`
  margin-top: 5px;
  height: 18px;
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => props.theme.error};
`

export const Error = ({ id }) => {
  return <Text data-error={`error__${id}`}></Text>
}

Error.propTypes = {
  id: string,
}
