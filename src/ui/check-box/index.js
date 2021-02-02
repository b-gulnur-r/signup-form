import React, { useState, useEffect, useContext } from "react"
import { string } from "prop-types"
import styled from "styled-components"
import { AcceptTerms } from "./accept-terms"
import { FormContext } from "../../service/form-context"

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

const Unchecked = styled.div`
  height: 28px;
  width: 28px;
  margin-right: 8px;
  border: 1px solid ${(props) => props.theme.secondary};
  box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
  border-radius: 4px;
  box-sizing: border-box;
`

const Checked = styled(Unchecked)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${(props) => props.theme.primary};
  color: ${(props) => props.theme.primary};
`

const Input = styled.input`
  display: none;
`

export const CheckBox = ({ name }) => {
  const [isAcceptTerms, setAcceptTerms] = useState(false)
  const [value, setValue] = useState(false)
  const { setValid, changeValue } = useContext(FormContext)

  useEffect(() => {
    setValid()
    // eslint-disable-next-line
  }, [value])

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const onClick = () => {
    setValue(!isAcceptTerms)
    setAcceptTerms(!isAcceptTerms)
    changeValue(name, !isAcceptTerms)
  }

  return (
    <>
      <Wrapper onClick={onClick}>
        {isAcceptTerms ? (
          <Checked>
            <i className="fas fa-check"></i>
          </Checked>
        ) : (
          <Unchecked />
        )}
        <Input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
        />
        <AcceptTerms />
      </Wrapper>
    </>
  )
}

CheckBox.propTypes = {
  name: string,
}
