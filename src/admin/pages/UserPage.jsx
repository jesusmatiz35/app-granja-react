import { useState } from "react";
import { Breadcrumb } from "../../ui/components/Breadcrumb";
import { Table } from "../../ui/components/table";

export const UserPage = () => {  

  const onView = (obj) => {
    console.log(obj);
  }

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
    { column: "createdAt" },
    { column: "action" },
  ];
  const data = [
    {
      id: "1",
      name: "John",
      lastname: "Doe",
      email: "john.doe@correo.com",
      phone: "555-5555",
      createdAt: "2025-02-16",
    },
    {
      id: "2",
      name: "John",
      lastname: "Doe",
      email: "john.doe@correo.com",
      phone: "555-5555",
      createdAt: "2025-02-16",
    },
    {
      id: "3",
      name: "John",
      lastname: "Doe",
      email: "john.doe@correo.com",
      phone: "555-5555",
      createdAt: "2025-02-16",
    },
    {
      id: "4",
      name: "John",
      lastname: "Doe",
      email: "john.doe@correo.com",
      phone: "555-5555",
      createdAt: "2025-02-16",
    },
  ];

  const [json] = useState(data);

  const newJson = json.map( (dato) => ({
    ...dato,
    action: <i onClick={ () => onView(dato)} className="fa fa-eye text-primary"></i>
  }));

  return (
    <>
      <Breadcrumb breadCrumb="Usuarios" />
      {/* Contenido de la página */}
      <Table caption="Lista de usuarios" headers={headers} columns={columns} data={newJson} />
    </>
  );
};
