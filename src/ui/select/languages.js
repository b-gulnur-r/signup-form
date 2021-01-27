import React from "react"
import { func } from "prop-types"
import styled from "styled-components"

const List = styled.ul`
  position: absolute;
  width: 100%;
  padding: 0;
  margin: 0;
  margin-top: -28px;
  background: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.secondary};
  box-sizing: border-box;
  border-radius: 6px;
`

const ListItem = styled.li`
  padding: 12px 16px;
  list-style-type: none;
  font-size: 16px;
  color: ${(props) => props.theme.grey[0]};
  &:hover {
    background: ${(props) => props.theme.blue[1]};
    cursor: pointer;
  }
`

const languages = [
  {
    label: "Русский",
    value: "ru",
  },
  {
    label: "Английский",
    value: "en",
  },
  { label: "Китайский", value: "zh" },
  { label: "Испанский", value: "es" },
]

export const Languages = ({
  setVisible,
  onChangeText,
  onChangeValue,
}) => {
  return (
    <List>
      {languages.map(({ label, value }) => {
        return (
          <ListItem
            key={value}
            onClick={() => {
              setVisible(false)
              onChangeText(label)
              onChangeValue(value)
            }}
          >
            {label}
          </ListItem>
        )
      })}
    </List>
  )
}

Languages.propTypes = {
  setVisible: func,
  onChangeText: func,
  onChangeValue: func,
}
