import React, { useState } from "react"
import { SignUp } from "./components/sign-up"
import { FormContext } from "./service/form-context"
import { getValidatedForm } from "./service/validation-schemas"

function App() {
  const [isValid, setValid] = useState(false)

  return (
    <FormContext.Provider
      value={{
        isValid,
        setValid: () => setValid(getValidatedForm()),
      }}
    >
      <SignUp />
    </FormContext.Provider>
  )
}

export default App
