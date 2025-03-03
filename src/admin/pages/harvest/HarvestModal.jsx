import { useEffect, useState } from "react";
import {
  CustomForm,
  InputForm,
  ModalMain,
} from "../../components";
import { useForm } from "../../hooks";

const options = [
  { value: 1, viewValue: "Galpón A" },
  { value: 2, viewValue: "Galpón B" },
  { value: 3, viewValue: "Galpón C" },
  { value: 4, viewValue: "Galpón D" },
  { value: 5, viewValue: "Galpón E" },
];

const today = new Date().toISOString().split("T")[0];

export const HarvestModal = ({ onClose, title = "Modal Title", data={} }) => {
  const {
    formState,
    onInputChange,
    sheldId,
    sheld,
    categoryC,
    categoryB,
    categoryA,
    categoryAA,
    categoryAAA,
    categoryExtra,
    brokenEggs,
    dateNow,
  } = useForm({ ...data, dateNow: today });

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
      dateNow,
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
    dateNow,
  ]);

  useEffect(() => {
    categoryC &&
    categoryB &&
    categoryA &&
    categoryAA &&
    categoryAAA &&
    brokenEggs &&
    categoryExtra &&
    dateNow
      ? setDisabledButton(false)
      : setDisabledButton(true);
  }, [
    categoryC,
    categoryB,
    categoryA,
    categoryAA,
    categoryAAA,
    categoryExtra,
    brokenEggs,
    dateNow,
  ]);

  const handleChangeValue = (event) => {
    const { target } = event;
    const { type, value } = target;

    if (type === "number" && !isNaN(Number(value)) && Number(value) < 0) return;

    onInputChange(event);
  };

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
        <div className="text-center my-0 py-0">
          <h2>{data?.sheld}</h2>
        </div>
        <div
          className="col-12 text-center py-0 mb-2"
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
        <div className="row mb-1">
          <InputForm
            type="number"
            label="Huevos C"
            name="categoryC"
            defaultValue={categoryC}
            onInputChange={handleChangeValue}
          />
          <InputForm
            type="number"
            label="Huevos B"
            name="categoryB"
            defaultValue={categoryB}
            onInputChange={handleChangeValue}
          />
        </div>
        <div className="row mb-1">
          <InputForm
            type="number"
            label="Huevos A"
            name="categoryA"
            defaultValue={categoryA}
            onInputChange={handleChangeValue}
          />
          <InputForm
            type="number"
            label="Huevos AA"
            name="categoryAA"
            defaultValue={categoryAA}
            onInputChange={handleChangeValue}
          />
        </div>
        <div className="row mb-1">
          <InputForm
            type="number"
            label="Huevos AAA"
            name="categoryAAA"
            defaultValue={categoryAAA}
            onInputChange={handleChangeValue}
          />
          <InputForm
            type="number"
            label="Huevos Extra"
            name="categoryExtra"
            defaultValue={categoryExtra}
            onInputChange={handleChangeValue}
          />
        </div>
        <div className="row mb-1">
          <InputForm
            type="number"
            label="Huevos Rotos"
            name="brokenEggs"
            defaultValue={brokenEggs}
            onInputChange={handleChangeValue}
          />
          <InputForm
            type="date"
            label="Fecha"
            name="dateNow"
            defaultValue={dateNow}
            onInputChange={handleChangeValue}
          />
        </div>
      </CustomForm>
    </ModalMain>
  );
};
