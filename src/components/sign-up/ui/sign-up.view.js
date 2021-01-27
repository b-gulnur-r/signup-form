import React, { useContext } from "react"
import { func, bool } from "prop-types"
import styled from "styled-components"
import { Link } from "../../../ui/link"
import { Input } from "../../../ui/input"
import { Select } from "../../../ui/select"
import { CheckBox } from "../../../ui/check-box/"
import { FormContext } from "../../../service/form-context"

const Form = styled.form`
  width: 460px;
  padding: 30px;
  background-color: ${(props) => props.theme.white};
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
`

const Container = styled.div`
  position: relative;
  margin: 20px 0px;
`

const Title = styled.h1`
  margin: 0px;
  padding-bottom: 8px;
  font-size: 34px;
  font-weight: 700;
  color: ${(props) => props.theme.grey[1]};
`

const SubTitle = styled.span`
  font-size: 16px;
`

const Button = styled.button`
  width: 100%;
  padding: 16px;
  background: ${(props) =>
    props.disabled ? props.theme.secondary : props.theme.primary};
  border: none;
  outline: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  color: ${(props) =>
    props.disabled ? props.theme.grey[2] : props.theme.blue[1]};
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
      <SubTitle>
        Уже есть аккаунт? <Link>Войти</Link>
      </SubTitle>
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
