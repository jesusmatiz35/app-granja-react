import { useEffect, useState } from "react";
import { useForm } from "../hooks";

export const SearchFilterUser = ({ onDataSearch }) => {

  const { formState, onInputChange, setFormState, email, date_star } = useForm({});

  const [disableBtn, setDisableBtn] = useState(true);

  const execSearch = () => {
    onDataSearch(formState);
  }

  useEffect(() => {
    (email?.length > 0 || date_star?.length > 0) ? setDisableBtn(false) :  setDisableBtn(true);
  }, [email, date_star]);

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
                <label>Correo electronico</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="form-control"
                  onChange={onInputChange}
                />
              </div>
              <div className="col-md">
                <label>Fecha inicio</label>
                <input
                  type="text"
                  name="date_star"
                  id="date-star"
                  className="form-control"
                  onChange={onInputChange}
                />
              </div>
            </div>
            <div className="text-center mt-3 mb-2">
              <button type="button" disabled={disableBtn} onClick={execSearch} className="btn btn-outline-success btn-sm">
                <i className="fa fa-solid fa-filter"></i> Filtrar
              </button>{" "}
              <button type="reset" disabled={disableBtn} onClick={() => setFormState({})} className="btn btn-outline-danger btn-sm">
                <i className="fa fa-solid fa-filter-circle-xmark"></i> Limpiar
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
