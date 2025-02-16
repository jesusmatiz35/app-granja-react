import { useState } from "react";
import { useForm } from "../../../admin/hooks";
import { InputMessageError } from "./InputMessageError";
import { isValidEmail, validSizeText } from "../../../auth/helpers";

export const FormInput = ({
  placeholder,
  type = "text",
  name,
  required = true,
  errorMessage = { required: "", invalid: "" },
  min = 0,
  onValueChange,
}) => {
  const { onInputChange } = useForm({});

  const [hasError, setHasError] = useState(false);
  const [message, setMessage] = useState(null);

  const onValidatedInput = ({ target }) => {
    const { type, value } = target;

    setHasError(false);

    switch (type) {
      case "email":
        if (required && value.length === 0) {
          setMessage(errorMessage.required);
          setHasError(true);
        } else if (!isValidEmail(value)) {
          setMessage(errorMessage.invalid);
          setHasError(true);
        }
        break;
      case "text":
        if (value.length === 0 && required) {
          setMessage(errorMessage.required);
          setHasError(true);
        } else if (!validSizeText(value, min)) {
          setMessage(errorMessage.invalid);
          setHasError(true);
        }
        break;
      case "password":
        if (value.length === 0 && required) {
          setMessage(errorMessage.required);
          setHasError(true);
        } else if (!validSizeText(value, min)) {
          setMessage(errorMessage.invalid);
          setHasError(true);
        }
        break;
    }
  };

  return (
    <div className="field input-field">
      {hasError && <InputMessageError message={message} />}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={(event) => {
          onInputChange(event);
          onValueChange(event);
        }}
        onBlur={onValidatedInput}
        className="form-control mt-4"
      />      
    </div>
  );
};
