import React, { useState } from "react"
import styled from "styled-components"
import { SignUpForm } from "./ui/sign-up.form"

const Main = styled.main`
  min-height: 700px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SignUp = () => {
  const [openSelect, setOpenSelect] = useState(false)

  const onHideList = (e) => {
    if (
      e.target.parentElement.getAttribute("data-key") === "language"
    ) {
      setOpenSelect(!openSelect)
    } else {
      setOpenSelect(false)
    }
  }

  return (
    <Main onClick={onHideList}>
      <SignUpForm
        openSelect={openSelect}
        setOpenSelect={setOpenSelect}
      />
    </Main>
  )
}
