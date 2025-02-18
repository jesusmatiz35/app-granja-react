import { useEffect, useState } from "react";
import { Breadcrumb } from "../../ui/components/Breadcrumb";
import { Table } from "../../ui/components/table";
import { useFetch } from "../hooks";
import { ButtonFlag, LoadingMessage, ModalMain, SearchFilterUser } from "../components";

const headers = [
  { title: "#" },
  { title: "Nombre" },
  { title: "Apellidos" },
  { title: "E-mail" },
  { title: "Telefono" },
  { title: "Fecha" },
  { title: "Acción" },
];
const columns = [
  { column: "id" },
  { column: "name" },
  { column: "lastname" },
  { column: "email" },
  { column: "phone" },
  { column: "created_at" },
  { column: "action" },
];

export const UserPage = () => {
  const handleDeleteUser = (id) => {
    console.log(id);
  };

  const { data, isLoading, hasError, error } = useFetch("/data/users.json");

  const [json, setJson] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const handleButtonClick = (isCreate) => {
    isCreate ? setModalTitle("Crear usuario") : setModalTitle("Editar usuario");
    setShowModal(true);
  };

  const handleCloseModal = (result) => {
    console.log(result);
    setShowModal(false);
  };

  useEffect(() => {
    if (!isLoading) {
      const newJson = data.map((dato) => ({
        ...dato,
        action: (
          <>
            <button
              type="button"
              onClick={() => handleButtonClick(false)}
              className="btn btn-default btn-sm">
              <i className="fa fa-eye text-primary"></i>
            </button>{" "}
            <button
              type="button"
              onClick={() => handleDeleteUser(dato.id)}
              className="btn btn-default btn-sm">
              <i className="fa fa-trash-can text-danger"></i>
            </button>
          </>
        ),
      }));

      setJson(newJson);
    }
  }, [isLoading]);

  const searchInfo = (data) => {
    console.log(data);
  };

  return (
    <>
      <Breadcrumb breadCrumb="Usuarios" />
      {/* Contenido de la página */}
      <ButtonFlag
        onClickBtn={() => handleButtonClick(true)}
        icon="fa-user-plus"
      />
      {showModal && (
        <ModalMain modalTitle={modalTitle} onClose={handleCloseModal}>
          <form action="#">
            <div className="row">
              <div className="form-group col-6">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" className="form-control" />
                <small id="nombreError" className="form-text text-danger">Este campo es obligatorio.</small>
              </div>
              <div className="form-group col-6">
                <label htmlFor="apellidos">Apellidos</label>
                <input type="text" id="apellidos" className="form-control" />
                <small id="apellidoError" className="form-text text-danger">Este campo es obligatorio.</small>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-12">                
                <label htmlFor="email">Correo electronico</label>
                <input type="text" id="email" className="form-control" />
                <small id="emailError" className="form-text text-danger">Este campo es obligatorio.</small>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-6">
                <label htmlFor="pwd">Contraseña</label>
                <input type="password" id="pwd" className="form-control" />
                <small id="pwdError" className="form-text text-danger">Este campo es obligatorio.</small>
              </div>
              <div className="form-group col-6">
                <label htmlFor="repwd">Confirma contraseña</label>
                <input type="password" id="repwd" className="form-control" />
                <small id="repwdError" className="form-text text-danger">Este campo es obligatorio.</small>
              </div>
            </div>
          </form>
        </ModalMain>
      )}
      <SearchFilterUser onDataSearch={searchInfo} />
      {/* Se muestra mensaje de error en caso de existir */}
      {hasError && <small className="text-danger">{error.message}</small>}
      {/* Se muestra loading mientras se cargan los datos */}
      {isLoading && <LoadingMessage message="Cargando..." />}
      {/* Se carga datos de la tabla */}
      {!isLoading && (
        <Table
          caption="Lista de usuarios"
          headers={headers}
          columns={columns}
          pageSize={10}
          data={json}
          totalItems={json.length}
        />
      )}
    </>
  );
};
