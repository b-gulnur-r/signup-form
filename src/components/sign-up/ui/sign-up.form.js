/* eslint-disable no-console */
import React, { useContext } from "react"
import { bool, func } from "prop-types"

import { SignUpView } from "./sign-up.view"
import { FormContext } from "../../../service/form-context"

export const SignUpForm = ({ setOpenSelect, openSelect }) => {
  const { formData } = useContext(FormContext)

  const onSubmit = (e) => {
    console.log("Data:", formData)
    e.preventDefault()
  }

  return (
    <SignUpView
      onSubmit={onSubmit}
      setOpenSelect={setOpenSelect}
      openSelect={openSelect}
    />
  )
}

SignUpForm.propTypes = {
  setOpenSelect: func,
  openSelect: bool,
}
