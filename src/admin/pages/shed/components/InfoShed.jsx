import { ButtonForm, InputForm } from "../../../components";

export const InfoShed = () => {
  return (
    <>
      <div className="card mb-2 mt-2">
        <div className="card-header">
          <small>Información del galpón</small>
        </div>
        <div className="m-1">
          <div className="row">
            <InputForm
              disabled={true}
              label="Nombre del galpón"
              defaultValue="Galpón A"
              className="col-md-6 col-sm-12"
            />
            <InputForm
              disabled={true}
              label="Linea Genetica"
              defaultValue="HyLine Brown"
              className="col-md-6 col-sm-12"
            />
          </div>
          <div className="row">
            <InputForm
              disabled={true}
              label="Tipo de galpón"
              defaultValue="Producción de huevos"
              className="col-md-6 col-sm-12"
            />
            <InputForm
              disabled={true}
              label="Cantidad de aves"
              defaultValue="1000"
              className="col-md-6 col-sm-12"
            />
          </div>
          <div className="row">
            <InputForm
              disabled={true}
              label="Fecha de nacimiento"
              defaultValue="01-01-2025"
              className="col-md-6 col-sm-12"
            />
            <InputForm
              disabled={true}
              label="Semanas"
              defaultValue="37"
              className="col-md-6 col-sm-12"
            />
          </div>
        </div>
        <div className="text-center mt-3 mb-2">
          <ButtonForm
            label="Actualizar"
            type="button"
            disabled={false}
            onBtnClick={() => console.log('...') }
            icon="fa-solid fa-pen"
            className="btn-outline-success btn-sm"
          />
        </div>
      </div>
    </>
  );
};
