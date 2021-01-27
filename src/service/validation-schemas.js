const forbiddenSpaces = (value) => {
  const isValid = true
  const error = ""
  if (typeof value === "string" && value.match(/\s/gm)) {
    return {
      error: "Пробелы запрещены",
      isValid: false,
    }
  }
  return {
    isValid,
    error,
  }
}
const checkFields = ({ nameField, value }) => {
  let isValidated = true
  let errorMessage = ""

  const { isValid, error } = forbiddenSpaces(value)

  errorMessage = error
  if (!isValid) {
    return {
      isValid: false,
      errorMessage,
    }
  }

  switch (nameField) {
    case "email":
      if (!value.match(/^([\w-\\.]+@([\w-]+\.)+[\w-]{2,4})?$/g)) {
        errorMessage = "Некорректный email"
        isValidated = false
      }
      break
    case "phone":
      // eslint-disable-next-line no-case-declarations
      const matchPhones = value.match(
        /[+]?([0-9]{1}[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2})/g,
      )
      if (!matchPhones || value.length > matchPhones[0].length) {
        errorMessage = "Некорректный номер"
        isValidated = false
      }
      break
    case "name":
      if (value.match(/[^a-zA-Zа-яА-Я]/g) || value.length < 2) {
        errorMessage = "Некорректное значение"
        isValidated = false
      }
      break
    case "acceptTermsOfUse":
      if (value === "false") {
        errorMessage = "Необходимо принять условия"
        isValidated = false
      }
      break
    default:
      break
  }

  return {
    isValid: isValidated,
    errorMessage,
  }
}

const validationForm = ({ data }) => {
  const temp = Object.keys(data)
  const errorMessages = []

  for (let i = 0; i < temp.length; i++) {
    const key = temp[i]

    if (data[key].length === 0) {
      errorMessages.push({
        field: key,
        error: "Необходимо заполнить",
        isValidate: false,
      })
    } else {
      const { isValid, errorMessage } = checkFields({
        nameField: key,
        value: data[key],
      })
      errorMessages.push({
        field: key,
        error: errorMessage,
        isValidate: isValid,
      })
    }
  }
  return errorMessages
}

export const getValidatedForm = () => {
  const form = document.querySelector("form")
  const formData = new FormData(form)
  const data = Object.fromEntries(formData.entries())
  const errors = validationForm({
    data,
  })

  const isValid = errors.every((error) => error.isValidate)
  return isValid
}

export const validationField = (e) => {
  const nameField = e.target.getAttribute("name")
  const value = e.target.value.trim()

  const { errorMessage } = checkFields({
    nameField,
    value,
  })
  return {
    errorMessage,
  }
}
