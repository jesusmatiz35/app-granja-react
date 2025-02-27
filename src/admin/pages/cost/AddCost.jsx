import { useEffect, useState } from "react";
import { useForm } from "../../hooks";
import { ButtonForm, InputForm, SelectInput } from "../../components";
import Multiselect from "multiselect-react-dropdown";

const options = [
  { value: "0", viewValue: "Todos" },
  { value: "1", viewValue: "Galpón A" },
  { value: "2", viewValue: "Galpón B" },
  { value: "3", viewValue: "Galpón C" },
  { value: "4", viewValue: "Galpón D" },
  { value: "5", viewValue: "Galpón E" },
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
      <div className="card shadow-sm mb-2 pb-2">
        <div className="card-header">
          <small>Registrar costo</small>
        </div>
        <form action="#">
          <div className="card-body py-0">
            <div className="row g-2">
              <div className="col-3">
                <label>Galpones</label>
                <Multiselect
                  options={options}
                  placeholder=""
                  hidePlaceholder={true}
                  selectedValues={options.value}
                  onSelect={onSelect}
                  onRemove={onRemove}
                  displayValue="viewValue"
                  showArrow={false}
                  closeOnSelect={false}
                />
              </div>
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

          <div className="text-center mt-3 mb-2">
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
      </div>
    </>
  );
};
