import { useEffect, useState } from "react";
import { Breadcrumb } from "../../ui/components/Breadcrumb";
import { Table } from "../../ui/components/table";
import { useFetch } from "../hooks";
import {
  ButtonFlag,
  ButtonForm,
  InputForm,
  LoadingMessage,
  ModalMain,
  SearchFilterUser,
} from "../components";

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
            <ButtonForm
              label={<i className="fa fa-eye text-primary"></i>}
              className="btn-default btn-sm"
              onBtnClick={() => handleButtonClick(false)}
            />{" "}
            <ButtonForm
              label={<i className="fa fa-trash-can text-danger"></i>}
              className="btn-default btn-sm"
              onBtnClick={() => handleDeleteUser(dato.id)}
            />
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
            <div className="row mb-1">
              <InputForm
                label="Nombre"
                type="text"
                name="nombre"
                className="form-group col-6"
              />
              <InputForm
                label="Apellidos"
                type="text"
                name="apellidos"
                className="form-group col-6"
              />
            </div>
            <div className="row mb-1">
              <InputForm
                label="Correo electronico"
                type="email"
                name="email"
                className="form-group col-12"
              />
            </div>
            <div className="row">
              <InputForm
                label="Contraseña"
                type="password"
                name="pwd"
                className="form-group col-6"
              />
              <InputForm
                label="Confirmar contraseña"
                type="password"
                name="repwd"
                className="form-group col-6"
              />
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
