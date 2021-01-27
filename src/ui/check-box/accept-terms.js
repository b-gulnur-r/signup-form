import React from "react"
import styled from "styled-components"

const Text = styled.div`
  font-size: 16px;
  color: #756f86;
`

const Link = styled.a`
  font-size: 16px;
  color: #0880ae;
`

export const AcceptTerms = () => {
  return (
    <Text>
      Принимаю <Link>условия</Link> использования
    </Text>
  )
}
