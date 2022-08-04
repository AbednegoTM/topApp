import React, { useState } from "react";

type Props = {};

const useValidation = (props: Props) => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const validateEmail = (email: string) => {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setErrorMessage("Not a valid email");
      return false;
    }
    return true;
  };

  const validate = (type: string) => {
    
  };
  return {
    validate,
    errorMessage,
  };
};

export default useValidation;
