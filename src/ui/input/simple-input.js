import React, { useState, useContext } from "react"
import { string } from "prop-types"
import styled from "styled-components"
import { validationField } from "../../service/validation-schemas"
import { FormContext } from "../../service/form-context"

const Input = styled.input`
  width: 100%;
  padding: 16px;
  background: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.secondary};
  border-radius: 6px;
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.grey[1]};
  box-sizing: border-box;
  &:focus {
    outline: 0;
    border: 2px solid ${(props) => props.theme.primary};
  }
  &::placeholder {
    font-size: 16px;
    color: ${(props) => props.theme.blue[0]};
  }
  &:-ms-input-placeholder {
    font-size: 16px;
    color: ${(props) => props.theme.blue[0]};
  }

  &::-ms-input-placeholder {
    font-size: 16px;
    color: ${(props) => props.theme.blue[0]};
  }
  &:hover {
    border: 2px solid ${(props) => props.theme.primary};
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
  const { setValid, changeValue } = useContext(FormContext)

  const onChange = (event) => {
    setValue(event.target.value)
    changeValue(name, event.target.value)
    setValid()
  }

  const onBlur = (e) => {
    const name = e.target.getAttribute("id")
    const error = e.target.form.querySelector(
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
