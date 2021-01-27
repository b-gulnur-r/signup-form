import React, { useState, useContext } from "react"
import { string } from "prop-types"
import styled from "styled-components"
import { validationField } from "../../service/validation-schemas"
import { FormContext } from "../../service/form-context"

const Input = styled.input`
  width: 100%;
  padding: 16px;
  background: #ffffff;
  border: 1px solid #dbe2ea;
  border-radius: 6px;
  font-size: 16px;
  color: #2c2738;
  box-sizing: border-box;
  &:focus {
    outline: 0;
    border: 2px solid #0880ae;
  }
  &::placeholder {
    font-size: 16px;
    color: #7c9cbf;
  }
  &:-ms-input-placeholder {
    font-size: 16px;
    color: #7c9cbf;
  }

  &::-ms-input-placeholder {
    font-size: 16px;
    color: #7c9cbf;
  }
  &:hover {
    border: 2px solid #0880ae;
  }
`

export const SimpleInput = ({
  id,
  type,
  name,
  placeholder,
  ...props
}) => {
  const [value, setValue] = useState("")
  const { setValid } = useContext(FormContext)

  const onChange = (event) => {
    setValue(event.target.value)
    setValid()
  }

  const onBlur = (e) => {
    const name = e.target.getAttribute("id")
    const error = document.querySelector(
      `[data-error="error__${name}"]`,
    )
    if (!e.target.value) {
      if (error) {
        error.textContent = "Необходимо заполнить"
      }
    } else {
      const { errorMessage } = validationField(e)
      if (error) {
        error.textContent = errorMessage
      }
    }
  }

  return (
    <Input
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      {...props}
    />
  )
}

SimpleInput.propTypes = {
  id: string,
  type: string,
  name: string,
  placeholder: string,
}
