import { useEffect, useState } from "react";
import { Breadcrumb } from "../../../ui/components/Breadcrumb";
import { useFetch } from "../../hooks";
import { Table } from "../../../ui/components/table";
import {
  CustomForm,
  InputForm,
  LoadingMessage,
  ModalMain,
  SelectInput,
} from "../../components";
import { LineGenetic } from "../../../commons/LineGenetic";
import { TypesShed } from "../../../commons/TypesShed";
import { SearchFilterShed } from "./SearchFilterShed";
import { useNavigate } from "react-router";

const headers = [
  { title: "#" },
  { title: "Galpón" },
  { title: "Tipo de galpón" },
  { title: "Linea Genetica" },
  { title: "Semanas" },
  { title: "Cant. Aves" },
  { title: "Fecha de nacimiento" },
  { title: "Acción" },
];
const columns = [
  { column: "id" },
  { column: "shedname" },
  { column: "type_shed" },
  { column: "genetic_line" },
  { column: "weeks_of_life" },
  { column: "amount" },
  { column: "birth" },
  { column: "action" },
];

export const ShedPage = () => {
  const { data, isLoading, hasError, error } = useFetch("/data/shed.json");

  const [json, setJson] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const handleButtonClick = (isCreate) => {
    isCreate ? setModalTitle("Crear Galpón") : setModalTitle("Editar Galpón");
    setShowModal(true);
  };

  const handleCloseModal = (result) => {
    console.log(result);
    setShowModal(false);
  };

  const handleDeleteShed = (id) => {
    console.log(id);    
  };

  const navigate = useNavigate();

  const handleNavigateDetail = (id) => {
    console.log(id);
    navigate(`/sheds/detail/${id}`);
  }

  useEffect(() => {
    if (!isLoading) {
      const newJson = data.map((dato) => ({
        ...dato,
        action: (
          <>
            <button
              type="button"
              onClick={() => handleNavigateDetail(dato.id)}
              className="btn btn-default btn-sm">
              <i className="fa fa-eye text-primary"></i>
            </button>{" "}
            <button
              type="button"
              onClick={() => handleDeleteShed(dato.id)}
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
      <Breadcrumb breadCrumb="Galpones" />
      <button
        type="button"
        onClick={() => handleButtonClick(true)}
        className="btn btn-outline-info text-primary btn-sm m-1">
        <i className="fa fa-solid fa-plus"></i> Agregar galpón
      </button>
      {showModal && (
        <ModalMain modalTitle={modalTitle} onClose={handleCloseModal}>
          <CustomForm>
            <div className="row mb-1">
              <SelectInput
                label="Linea Genetica"
                defaultValue={0}
                options={LineGenetic}
              />
              <InputForm
                label="Nombre del galpón"
                type="text"
                name="nombre"
                className="form-group col-6"
              />
            </div>
            <div className="row mb-1">
              <SelectInput
                label="Tipo de Galpón"
                defaultValue={0}
                options={TypesShed}
              />
              <InputForm
                label="Cantidad de Aves"
                type="text"
                name="amount"
                className="form-group col-6"
              />
            </div>
            <div className="row mb-1">              
              <InputForm
                label="Fecha de nacimiento"
                type="date"
                name="birth"
                className="form-group col-6"
              />
            </div>
          </CustomForm>
        </ModalMain>
      )}
      <SearchFilterShed onDataSearch={searchInfo} />
      {isLoading && <LoadingMessage message="Cargando..." />}
      {!isLoading && (
        <Table
          caption="Galpones"
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
