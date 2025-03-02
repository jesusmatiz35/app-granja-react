import { useState } from "react";
import { CustomForm, InputForm, ModalMain } from "../../components";
import { useForm } from "../../hooks";

export const CostModal = ({ onClose, title = "Modal Title" }) => {
  const [disabledButton, setDisabledButton] = useState(true);
  const { formState, onInputChange, amount, cost, description } = useForm({});

  const handleClose = (result) => {
    console.log(formState);
    onClose(result);
  };

  return (
    <ModalMain
      onClose={handleClose}
      modalTitle={title}
      disabledBtn={disabledButton}>
      <CustomForm>
        <div className="row mb-1">
            <InputForm onInputChange={onInputChange} type="number" label="Cantidad" name="amount" className="col-md-6 col-sm-12" />
            <InputForm onInputChange={onInputChange} type="number" label="Valor" name="cost" className="col-md-6 col-sm-12" />
            <InputForm onInputChange={onInputChange} type="text" label="Descripción" name="description" className="col-12" />
        </div>
      </CustomForm>
    </ModalMain>
  );
};
