import { useEffect, useState } from "react";
import { ButtonForm, InputForm, SelectInput } from "../../components";
import { useForm } from "../../hooks";

const options = [
  { value: "1", viewValue: "Galpón A" },
  { value: "2", viewValue: "Galpón B" },
  { value: "3", viewValue: "Galpón C" },
  { value: "4", viewValue: "Galpón D" },
  { value: "5", viewValue: "Galpón E" },
];

export const AddHarvest = () => {
  const {
    formState,
    onInputChange,
    setFormState,
    shed,
    categoryC,
    categoryB,
    categoryA,
    categoryAA,
    categoryAAA,
    categoryExtra,
    brokenEggs,
  } = useForm({});

  const [totalEggs, setTotalEggs] = useState(0);
  const [disabledButton, setDisabledButton] = useState(true);

  useEffect(() => {
    const eggs = [
      categoryC,
      categoryB,
      categoryA,
      categoryAA,
      categoryAAA,
      categoryExtra,
      brokenEggs,
    ]
      .map(Number)
      .reduce((acc, val) => acc + (isNaN(val) || val < 0 ? 0 : val), 0);
    setTotalEggs(eggs);
  }, [
    categoryC,
    categoryB,
    categoryA,
    categoryAA,
    categoryAAA,
    categoryExtra,
    brokenEggs,
  ]);

  useEffect(() => {
    shed &&
    categoryC &&
    categoryB &&
    categoryA &&
    categoryAA &&
    categoryAAA &&
    brokenEggs &&
    categoryExtra
      ? setDisabledButton(false)
      : setDisabledButton(true);
  }, [
    shed,
    categoryC,
    categoryB,
    categoryA,
    categoryAA,
    categoryAAA,
    categoryExtra,
    brokenEggs,
  ]);

  const handleChangeValue = (event) => {
    const { target } = event;
    const { type, value } = target;

    if (
      type === "number" &&
      !isNaN(Number(value)) &&
      Number(value) < 0
    )
      return;

    onInputChange(event);
  };

  const handleAddHarvest = () => {
    console.log(formState);
  };

  const handleResetHarvest = () => {
    setFormState({});
  };

  return (
    <>
      <div className="card shadow-sm mb-2 pb-2">
        <div className="card-header">
          <small>Registrar recolección</small>
        </div>
        <form action="#">
          <div className="card-body py-0">
            <div className="row g-2">
              <div className="col-2">
                <SelectInput
                  name="shed"
                  onSelectChange={handleChangeValue}
                  label="Galpón"
                  defaultValue={0}
                  options={options}
                />
              </div>
              <div className="col-1">
                <InputForm
                  type="number"
                  label="Huevos C"
                  name="categoryC"
                  onInputChange={handleChangeValue}
                />
              </div>
              <div className="col-1">
                <InputForm
                  type="number"
                  label="Huevos B"
                  name="categoryB"
                  onInputChange={handleChangeValue}
                />
              </div>
              <div className="col-1">
                <InputForm
                  type="number"
                  label="Huevos A"
                  name="categoryA"
                  onInputChange={handleChangeValue}
                />
              </div>
              <div className="col-1">
                <InputForm
                  type="number"
                  label="Huevos AA"
                  name="categoryAA"
                  onInputChange={handleChangeValue}
                />
              </div>
              <div className="col-1">
                <InputForm
                  type="number"
                  label="Huevos AAA"
                  name="categoryAAA"
                  onInputChange={handleChangeValue}
                />
              </div>
              <div className="col-1">
                <InputForm
                  type="number"
                  label="Huevos Extra"
                  name="categoryExtra"
                  onInputChange={handleChangeValue}
                />
              </div>
              <div className="col-1">
                <InputForm
                  type="number"
                  label="Huevos Rotos"
                  name="brokenEggs"
                  onInputChange={handleChangeValue}
                />
              </div>
              <div className="col-1 d-flex align-items-center pt-3">
                <ButtonForm
                  label=""
                  type="button"
                  disabled={disabledButton}
                  onBtnClick={handleAddHarvest}
                  icon="fa-solid fa-plus"
                  className="btn-outline-success btn-md"
                />
                <small className="text-white"> - </small>
                <ButtonForm
                  label=""
                  type="reset"
                  disabled={disabledButton}
                  onBtnClick={handleResetHarvest}
                  icon="fa-solid fa-minus"
                  className="btn-outline-danger btn-md"
                />
              </div>
              <div
                className="col-2 text-center py-0"
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.25)",
                  borderRadius: "5px",
                }}>
                <label>Total Huevos</label>
                <div
                  className="text-center box-shadow fs-4"
                  style={{ marginTop: "-3px" }}>
                  <p className="m-1 text-success">{totalEggs | 0}</p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
