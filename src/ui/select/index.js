import React, { useState, useEffect, useContext } from "react"
import { bool, func, string } from "prop-types"
import styled from "styled-components"
import { InputContainer } from "../input/input-container"
import { Languages } from "./languages"
import { FormContext } from "../../service/form-context"

const Wrapper = styled.div`
  position: relative;
`

const Text = styled.div`
  width: 100%;
  padding: 16px;
  background: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.secondary};
  border-radius: 6px;
  font-size: 16px;
  color: ${(props) => props.theme.grey[1]};
  box-sizing: border-box;
  &:hover {
    border: 2px solid ${(props) => props.theme.primary};
  }
  margin-bottom: 5px;
  font-size: 16px;
  color: ${(props) =>
    props.text ? props.theme.grey[1] : props.theme.blue[2]};
  cursor: pointer;
  ${({ visible }) =>
    visible &&
    `
   border: 2px solid ${(props) => props.theme.primary};
`};
`

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 40px;
  position: absolute;
  right: 0px;
  top: 0;
  color: ${(props) => props.theme.primary};
  cursor: pointer;
`

const Input = styled.input`
  display: none;
`

export const Select = ({ name, label, setVisible, visible }) => {
  const [text, setText] = useState("")
  const [value, setValue] = useState("")
  const [hover, setHover] = useState(false)
  const { setValid, changeValue } = useContext(FormContext)

  useEffect(() => {
    setValid()
    // eslint-disable-next-line
  }, [value])

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const onChangeValue = (value) => {
    setValue(value)
    changeValue(name, value)
  }

  const onChangeText = (value) => {
    setText(value)
  }

  return (
    <>
      <InputContainer id={name} label={label}>
        <Wrapper data-key={name}>
          <Text
            data-name={name}
            visible={visible || hover}
            text={text}
          >
            {text || label}
          </Text>
          <Icon
            className="fas fa-chevron-down"
            onMouseLeave={() => setHover(false)}
            onMouseEnter={() => setHover(true)}
          />
        </Wrapper>
      </InputContainer>
      <Input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
      {visible && (
        <Languages
          setVisible={setVisible}
          onChangeText={onChangeText}
          onChangeValue={onChangeValue}
        />
      )}
    </>
  )
}

Select.propTypes = {
  name: string,
  label: string,
  setVisible: func,
  visible: bool,
}
