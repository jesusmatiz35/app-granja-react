import { useEffect, useState } from "react";
import { Breadcrumb } from "../../ui/components/Breadcrumb";
import { Table } from "../../ui/components/table";
import { useFetch } from "../hooks";

export const UserPage = () => {
  const onView = (obj) => {
    console.log(obj);
  };

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

  const { data, isLoading, hasError } = useFetch("/public/data/users.json");

  const [json, setJson] = useState([]);  
  
  useEffect(() => {
    
    if (!isLoading) {

      const newJson = data.map( (dato) => ({
        ...dato,
        action: <><i onClick={ () => onView(dato)} className="fa fa-eye text-primary"></i>{ " " }<i onClick={ () => onView(dato.id)} className="fa fa-trash-can text-danger"></i></>
      }));

      setJson(newJson);
    }
  }, [isLoading]);


  return (
    <>
      <Breadcrumb breadCrumb="Usuarios" />
      {/* Contenido de la página */}
      { !isLoading && <Table
        caption="Lista de usuarios"
        headers={headers}
        columns={columns}
        data={json}
      /> }
    </>
  );
};
