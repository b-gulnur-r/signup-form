import React, { useContext } from "react"
import { func, bool } from "prop-types"
import styled from "styled-components"
import { Input } from "../../../ui/input"
import { Select } from "../../../ui/select"
import { CheckBox } from "../../../ui/check-box/"
import { FormContext } from "../../../service/form-context"

const Form = styled.form`
  padding: 30px;
  background-color: #ffffff;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  width: 460px;
`

const Container = styled.div`
  margin: 20px 0px;
  position: relative;
`

const Title = styled.h1`
  margin: 0px;
  padding-bottom: 8px;
  font-size: 34px;
  color: #2c2738;
`

const Button = styled.button`
  width: 100%;
  padding: 16px;
  background: ${(props) => (props.disabled ? "#dbe2ea" : "#0880AE")};
  border: none;
  outline: none;
  border-radius: 6px;
  font-size: 16px;
  color: ${(props) => (props.disabled ? "#b1b5bf" : "#EBF4F8")};
`

export const SignUpView = ({
  onSubmit,
  setOpenSelect,
  openSelect,
}) => {
  const { isValid } = useContext(FormContext)

  return (
    <Form>
      <Title>Регистрация</Title>
      <span>Уже есть аккаунт? Войти</span>
      <Container>
        <Input
          id="name"
          label="Имя"
          type="text"
          name="name"
          placeholder="Введите ваше имя"
        />
        <Input
          id="email"
          label="Email"
          type="email"
          name="email"
          placeholder="Введите ваш email"
        />
        <Input
          id="phone"
          label="Номер телефона"
          type="tel"
          name="phone"
          placeholder="Введите номер телефона"
          pattern="[0-9]{1}[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}"
        />
        <Select
          name="language"
          label="Язык"
          setVisible={setOpenSelect}
          visible={openSelect}
        />
        <CheckBox name="acceptTermsOfUse" />
      </Container>
      <Button type="submit" onClick={onSubmit} disabled={!isValid}>
        Зарегистрироваться
      </Button>
    </Form>
  )
}

SignUpView.propTypes = {
  onSubmit: func,
  setOpenSelect: func,
  openSelect: bool,
}
