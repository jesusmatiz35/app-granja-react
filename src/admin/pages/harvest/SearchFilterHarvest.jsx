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

export const SearchFilterHarvest = ({ onDataSearch }) => {
  const { formState, onInputChange, setFormState, shed, date_star, date_end } =
    useForm({});

  const [disableBtn, setDisableBtn] = useState(true);

  const execSearch = () => {
    onDataSearch(formState);
  };

  useEffect(() => {
    shed?.length > 0 || date_star?.length > 0 || date_end?.length > 0
      ? setDisableBtn(false)
      : setDisableBtn(true);
  }, [shed, date_star, date_end]);

  return (
    <>
      <div className="card shadow-sm mb-2">
        <div className="card-header">
          <small>Filtros de busqueda</small>
        </div>
        <form action="#">
          <div className="card-body py-0">
            <div className="row g-2">
              <SelectInput
                onSelectChange={onInputChange}
                label="Galpón"
                defaultValue={0}
                options={options}
              />
              <InputForm
                type="date"
                label="Fecha Inicio"
                name="date_star"
                onInputChange={onInputChange}
              />
              <InputForm
                type="date"
                label="Fecha Fin"
                name="date_end"
                onInputChange={onInputChange}
              />
            </div>
            <div className="text-center mt-3 mb-2">
              <ButtonForm
                label="Filtrar"
                type="button"
                disabled={disableBtn}
                onBtnClick={execSearch}
                icon="fa-solid fa-filter"
                className="btn-outline-success btn-sm"
              />{" "}
              <ButtonForm
                label="Limpiar"
                type="reset"
                disabled={disableBtn}
                onBtnClick={() => setFormState({})}
                icon="fa-solid fa-filter-circle-xmark"
                className="btn-outline-danger btn-sm"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
