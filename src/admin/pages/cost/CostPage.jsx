import { useEffect, useState } from "react";
import { Breadcrumb } from "../../../ui/components/Breadcrumb";
import { Table } from "../../../ui/components/table";
import { ButtonForm, LoadingMessage } from "../../components";
import { AddCost } from "./AddCost";

const headers = [
  { title: "Galpones" },
  { title: "Parametro" },
  { title: "Cantidad" },
  { title: "Valor" },
  { title: "Fecha de registro" },
  { title: "Acción" },
];

const columns = [
  { column: "shelds" },
  { column: "parameter" },
  { column: "amount" },
  { column: "cost" },
  { column: "created_at" },
  { column: "action" },
];

const data = [
  {
    shelds: "Galpón A, Galpon C",
    parameter: "Cuido Prepico 100 Dorado",
    amount: "28",
    cost: "$2.424.000",
    created_at: "25-02-2025",
  },
];

export const CostPage = () => {
  const [json, setJson] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const handleButtonClick = (d) => {
    console.log(d);
  }

  const sleepLoading = async() => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  }

  useEffect(() => {

    sleepLoading();

    const newJson = data.map((d) => ({
      ...d,
      action: (
        <>
          <ButtonForm
            label={<i className="fa fa-pencil text-primary"></i>}
            className="btn-default btn-sm"
            onBtnClick={() => handleButtonClick(d)}
          />
        </>
      ),
    }));

    setJson(newJson);
  }, []);

  return (
    <>
      <Breadcrumb breadCrumb="Costos" />
      <AddCost />
      {isLoading && <LoadingMessage message="Cargando..." />}
      {!isLoading && ( <Table
        caption="Costos"
        headers={headers}
        columns={columns}
        pageSize={10}
        data={json}
        totalItems={json.length}
      /> ) }
    </>
  );
};
