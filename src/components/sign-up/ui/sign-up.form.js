/* eslint-disable no-console */
import React from "react"
import { bool, func } from "prop-types"

import { SignUpView } from "./sign-up.view"

export const SignUpForm = ({ setOpenSelect, openSelect }) => {
  const onSubmit = (e) => {
    const form = e.target.form
    const formData = new FormData(form)
    console.log("Data:", Object.fromEntries(formData.entries()))
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
