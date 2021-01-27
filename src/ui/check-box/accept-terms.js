import React from "react"
import styled from "styled-components"

const Text = styled.div`
  font-size: 16px;
  color: ${(props) => props.theme.grey[0]};
`

const Link = styled.a`
  font-size: 16px;
  color: ${(props) => props.theme.primary};
`

export const AcceptTerms = () => {
  return (
    <Text>
      Принимаю <Link>условия</Link> использования
    </Text>
  )
}
