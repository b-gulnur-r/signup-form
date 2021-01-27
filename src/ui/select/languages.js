import React from "react"
import { func } from "prop-types"
import styled from "styled-components"

const List = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  position: absolute;
  margin-top: -28px;
  background: #ffffff;
  border: 1px solid #dbe2ea;
  box-sizing: border-box;
  border-radius: 6px;
`

const ListItem = styled.li`
  list-style-type: none;
  padding: 12px 16px;
  font-size: 16px;
  color: #756f86;
  &:hover {
    background: #ebf4f8;
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
