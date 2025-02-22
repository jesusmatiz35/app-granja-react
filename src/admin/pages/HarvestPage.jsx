import { useEffect, useState } from "react";
import { Breadcrumb } from "../../ui/components/Breadcrumb";
import { Table } from "../../ui/components/table";

const headers = [
  { title: "Galpón" },
  { title: "Huevos C" },
  { title: "Huevos B" },
  { title: "Huevos A" },
  { title: "Huevos AA" },
  { title: "Huevos AAA" },
  { title: "Huevos Extra" },
  { title: "Total Huevos" },
  { title: "Fecha de recolección" },
  { title: "Acción" },
];

const columns = [
  { column: "sheld" },
  { column: "categoryC" },
  { column: "categoryB" },
  { column: "categoryA" },
  { column: "categoryAA" },
  { column: "categoryAAA" },
  { column: "categoryExtra" },
  { column: "totalEggs" },
  { column: "date" },
  { column: "action" },
];

const harvest = [
  {
    sheld: "Galpón A",
    categoryC: 120,
    categoryB: 90,
    categoryA: 150,
    categoryAA: 150,
    categoryAAA: 121,
    categoryExtra: 180,
    totalEggs: 811,
    date: "2025-02-13",
  },
  {
    sheld: "Galpón B",
    categoryC: 120,
    categoryB: 90,
    categoryA: 150,
    categoryAA: 150,
    categoryAAA: 121,
    categoryExtra: 180,
    totalEggs: 811,
    date: "2025-02-13",
  },
  {
    sheld: "Galpón C",
    categoryC: 120,
    categoryB: 90,
    categoryA: 150,
    categoryAA: 150,
    categoryAAA: 121,
    categoryExtra: 180,
    totalEggs: 811,
    date: "2025-02-13",
  },
];

export const HarvestPage = () => {
  const [json, setJson] = useState([]);

  useEffect(() => {
    const newJson = harvest.map((dato) => ({
      ...dato,
      action: (
        <>
          <button
            type="button"
            onClick={() => console.log(dato)}
            className="btn btn-default btn-sm">
            <i className="fa fa-eye text-primary"></i>
          </button>{" "}
          <button
            type="button"
            onClick={() => console.log(dato)}
            className="btn btn-default btn-sm">
            <i className="fa fa-trash-can text-danger"></i>
          </button>
        </>
      ),
    }));

    setJson(newJson);
  }, []);

  return (
    <>
      <Breadcrumb breadCrumb="Recolección" />
      <Table
        caption="Recolección de Huevos"
        headers={headers}
        columns={columns}
        pageSize={10}
        data={json}
        totalItems={json.length}
      />
    </>
  );
};
