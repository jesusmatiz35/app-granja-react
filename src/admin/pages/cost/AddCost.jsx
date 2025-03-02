import { useEffect, useState } from "react";
import { useForm } from "../../hooks";
import { ButtonForm, InputForm } from "../../components";
import Select from "react-select";

const options = [
  { value: "0", label: "Todos" },
  { value: "1", label: "Galpón A" },
  { value: "2", label: "Galpón B" },
  { value: "3", label: "Galpón C" },
  { value: "4", label: "Galpón D" },
  { value: "5", label: "Galpón E" },
];

export const AddCost = () => {
  const {
    formState,
    onInputChange,
    setFormState,
    sheds,
    parameter,
    amount,
    cost,
  } = useForm({});

  const [disabledButton, setDisabledButton] = useState(true);

  useEffect(() => {
    sheds && parameter && amount && cost
      ? setDisabledButton(false)
      : setDisabledButton(true);
  }, [sheds, parameter, amount, cost]);

  const handleChangeSelect = (event) => {
    handleChangeValue({
      target: { name: "sheds", value: event.length <= 0 ? null : event },
    });
  };

  const handleChangeValue = (event) => {
    const { target } = event;
    const { type, value } = target;

    if (type === "number" && !isNaN(Number(value)) && Number(value) < 0) return;

    onInputChange(event);
  };

  const handleAddCost = () => {
    console.log(formState);
  };

  const handleResetCost = () => {
    setFormState({});
  };

  const onSelect = (selectedList, selectedItem) => {};

  const onRemove = (selectedList, removedItem) => {};

  return (
    <>
      <form action="#">
        <div className="card-body py-0">
          <div className="row g-2">
            <div className="col-2">
              <InputForm
                type="text"
                label="Parametro"
                name="parameter"
                onInputChange={handleChangeValue}
              />
            </div>
            <div className="col-1">
              <InputForm
                type="number"
                label="Cantidad"
                name="amount"
                onInputChange={handleChangeValue}
              />
            </div>
            <div className="col-1">
              <InputForm
                type="number"
                label="Costo"
                name="cost"
                onInputChange={handleChangeValue}
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-3">
          <ButtonForm
            label="Agregar"
            type="button"
            disabled={disabledButton}
            onBtnClick={handleAddCost}
            icon="fa-solid fa-plus"
            className="btn-outline-success btn-sm"
          />{" "}
          <ButtonForm
            label="Limpiar"
            type="reset"
            disabled={disabledButton}
            onBtnClick={handleResetCost}
            icon="fa-solid fa-delete-left"
            className="btn-outline-danger btn-sm"
          />
        </div>
      </form>
    </>
  );
};
