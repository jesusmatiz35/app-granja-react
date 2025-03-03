import { useState } from "react";
import { useForm } from "../../hooks";
import { CustomForm, InputForm, ModalMain } from "../../components";

const today = new Date().toISOString().split("T")[0];

export const FeedModal = ({ onClose, title = "Modal Title" }) => {
  const [disabledButton, setDisabledButton] = useState(true);
  const { formState, onInputChange, amount, date_consumed } = useForm({
    date_consumed: today
  });

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
          <InputForm
            onInputChange={onInputChange}
            type="number"
            label={(<>Cantidad <small>(kgs)</small></>)}
            name="amount"
            className="col-md-6 col-sm-12"
          />
          <InputForm
            onInputChange={onInputChange}
            type="date"
            label="Fecha de consumo"
            name="date_consumed"
            defaultValue={date_consumed}
            className="col-md-6 col-sm-12"
          />
        </div>
      </CustomForm>
    </ModalMain>
  );
};
