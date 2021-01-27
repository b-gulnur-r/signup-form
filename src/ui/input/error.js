import React from "react"
import { string } from "prop-types"
import styled from "styled-components"

const Text = styled.span`
  margin-top: 5px;
  font-size: 14px;
  height: 18px;
  color: #ff7171;
`

export const Error = ({ id }) => {
  return <Text data-error={`error__${id}`}></Text>
}

Error.propTypes = {
  id: string,
}
