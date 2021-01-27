import React from "react"
import { string } from "prop-types"
import { InputContainer } from "./input-container"
import { SimpleInput } from "./simple-input"

export const Input = ({
  id,
  label,
  type,
  name,
  placeholder,
  ...props
}) => {
  return (
    <InputContainer id={id} label={label}>
      <SimpleInput
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        {...props}
      />
    </InputContainer>
  )
}

Input.propTypes = {
  id: string,
  label: string,
  type: string,
  name: string,
  placeholder: string,
}
