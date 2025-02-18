import { useEffect, useState } from "react";
import { Breadcrumb } from "../../ui/components/Breadcrumb";
import { useFetch } from "../hooks";
import { Table } from "../../ui/components/table";
import { LoadingMessage, SearchFilterShed } from "../components";

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

  const handleButtonClick = (result) => {
    console.log(result);
  }

  const handleDeleteShed = (id) => {
    console.log(id);
  }

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
  }

  return (
    <>
      <Breadcrumb breadCrumb="Galpones" />
      <button type="button" className="btn btn-outline-info text-primary btn-sm m-1">Agregar galpón</button>
      <SearchFilterShed onDataSearch={searchInfo} />
      {isLoading && <LoadingMessage message="Cargando..." />}
      { !isLoading && <Table
        caption="Galpones"
        headers={headers}
        columns={columns}
        pageSize={10}
        data={json}
        totalItems={json.length}
      /> }
    </>
  );
};
