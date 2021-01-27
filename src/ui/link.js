import React from "react"
import { string } from "prop-types"
import styled from "styled-components"

const Text = styled.a`
  font-size: 16px;
  color: ${(props) => props.theme.primary};
  cursor: pointer;
`

export const Link = ({ children }) => <Text>{children}</Text>

Link.propTypes = {
  children: string,
}
