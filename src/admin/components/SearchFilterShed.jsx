import { useEffect, useState } from "react";
import { useForm } from "../hooks";

export const SearchFilterShed = ({ onDataSearch }) => {
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
              <div className="col-md">
                <label>Galpón</label>
                <select
                  id="shed"
                  onChange={onInputChange}
                  name="shed"
                  placeholder="Search"
                  className="form-select form-select-sm" style={{ height: '38px' }}>
                  <option value="">Seleccione una opción</option>
                  <option value={1}>Producción de huevos</option>
                  <option value={2}>Reproductores</option>
                  <option value={3}>Levante</option>
                </select>
              </div>
              <div className="col-md">
                <label>Fecha inicio</label>
                <input
                  type="date"
                  name="date_star"
                  id="date-star"
                  className="form-control"
                  onChange={onInputChange}
                />
                <span id="startDateSelected"></span>
              </div>
              <div className="col-md">
                <label>Fecha fin</label>
                <input
                  type="date"
                  name="date_end"
                  id="date-end"
                  className="form-control"
                  onChange={onInputChange}
                />
                <span id="startDateSelected"></span>
              </div>
            </div>
            <div className="text-center mt-3 mb-2">
              <button
                type="button"
                disabled={disableBtn}
                onClick={execSearch}
                className="btn btn-outline-success btn-sm">
                <i className="fa fa-solid fa-filter"></i> Filtrar
              </button>{" "}
              <button
                type="reset"
                disabled={disableBtn}
                onClick={() => setFormState({})}
                className="btn btn-outline-danger btn-sm">
                <i className="fa fa-solid fa-filter-circle-xmark"></i> Limpiar
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
