import { useEffect, useState } from "react";
import { Breadcrumb } from "../../../ui/components/Breadcrumb";
import { Table } from "../../../ui/components/table";
import { ButtonForm, LoadingMessage } from "../../components";
import { HarvestModal } from "./HarvestModal";

const headers = [
  { title: "Galpón" },
  { title: "C" },
  { title: "B" },
  { title: "A" },
  { title: "AA" },
  { title: "AAA" },
  { title: "Extra" },
  { title: "Rotos" },
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
  { column: "brokenEggs" },
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
    brokenEggs: 10,
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
    brokenEggs: 10,
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
    brokenEggs: 10,
    totalEggs: 811,
    date: "2025-02-13",
  },
];

export const HarvestPage = () => {
  const [json, setJson] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const sleepLoading = async() => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  }

  const handleButtonClick = (isCreate) => {
    isCreate ? setModalTitle("Registrar recolección") : setModalTitle("Editar recolección");
    setShowModal(true);
  };

  const handleCloseModal = (result) => {
    console.log(result);
    setShowModal(false);
  };

  useEffect(() => {

    sleepLoading();
    
    const newJson = harvest.map((dato) => ({
      ...dato,
      action: (
        <>
          <ButtonForm
            label={<i className="fa fa-eye text-primary"></i>}
            className="btn-default btn-sm"
            onBtnClick={() => handleButtonClick(false)}
          />
        </>
      ),
    }));

    setJson(newJson);
  }, []);

  return (
    <>
      <Breadcrumb breadCrumb="Recolección" />
      <button
        type="button"
        onClick={() => handleButtonClick(true)}
        className="btn btn-outline-info text-primary btn-sm m-1">
        Agregar recolección
      </button>
      {showModal && (<HarvestModal onClose={handleCloseModal} title={modalTitle} />)}
      {isLoading && <LoadingMessage message="Cargando..." />}
      {!isLoading && (<Table
        caption="Recolección de Huevos"
        headers={headers}
        columns={columns}
        pageSize={10}
        data={json}
        totalItems={json.length}
      />)}
    </>
  );
};
