import React, { useState } from "react"
import { ThemeProvider } from "styled-components"
import { SignUp } from "./components/sign-up"
import { FormContext } from "./service/form-context"
import { getValidatedForm } from "./service/validation-schemas"

const theme = {
  primary: "#0880AE",
  secondary: "#DBE2EA",
  error: "#FF7171",
  blue: ["#7C9CBF", "#EBF4F8", "#7c9cbf"],
  grey: ["#756F86", "#2c2738", "#b1b5bf"],
  white: "#ffffff",
}

function App() {
  const [isValid, setValid] = useState(false)
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    phone: null,
    language: null,
    acceptTermsOfUse: false,
  })

  return (
    <ThemeProvider theme={theme}>
      <FormContext.Provider
        value={{
          isValid,
          setValid: () => setValid(getValidatedForm()),
          formData,
          changeValue: (name, value) =>
            setFormData({
              ...formData,
              [name]: value,
            }),
        }}
      >
        <SignUp />
      </FormContext.Provider>
    </ThemeProvider>
  )
}

export default App
