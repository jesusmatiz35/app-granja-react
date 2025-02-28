import { useEffect, useState } from "react";
import { Breadcrumb } from "../../../ui/components/Breadcrumb";
import { Table } from "../../../ui/components/table";
import { ButtonForm, LoadingMessage } from "../../components";
import { HarvestModal } from "./HarvestModal";
import { SearchFilterHarvest } from "./SearchFilterHarvest";

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
  { title: "Fecha recolección" },
  { title: "Fecha registro" },
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
  { column: "dateNow" },
  { column: "dateRegister" },
  { column: "action" },
];

const harvest = [
  {
    sheldId: 1,
    sheld: "Galpón A",
    categoryC: 120,
    categoryB: 90,
    categoryA: 150,
    categoryAA: 150,
    categoryAAA: 121,
    categoryExtra: 180,
    brokenEggs: 10,
    totalEggs: 821,
    dateNow: "2025-02-13",
    dateRegister: "2025-02-13",
  },
  {
    sheldId: 2,
    sheld: "Galpón B",
    categoryC: 120,
    categoryB: 90,
    categoryA: 150,
    categoryAA: 150,
    categoryAAA: 121,
    categoryExtra: 180,
    brokenEggs: 10,
    totalEggs: 821,
    dateNow: "2025-02-13",
    dateRegister: "2025-02-13",
  },
  {
    sheldId: 3,
    sheld: "Galpón C",
    categoryC: 120,
    categoryB: 90,
    categoryA: 150,
    categoryAA: 150,
    categoryAAA: 121,
    categoryExtra: 180,
    brokenEggs: 10,
    totalEggs: 821,
    dateNow: "2025-02-13",
    dateRegister: "2025-02-13",
  },
];

export const HarvestPage = () => {
  const [json, setJson] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalData, setModalData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const sleepLoading = async() => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  }

  const handleButtonClick = (data) => {
    (data === null) ? setModalTitle("Registrar recolección") : setModalTitle("Editar recolección");  
    setModalData(data);
    setShowModal(true);
  };

  const handleDeleteButton = (data) => {
    console.log(`Eliminar: ${data.sheldId}`);
  };

  const handleCloseModal = (result) => {
    console.log(result);
    setShowModal(false);
  };

  useEffect(() => {

    sleepLoading();
    
    const newJson = harvest.map((data) => ({
      ...data,
      action: (
        <>
          <ButtonForm
              label={<i className="fa fa-pencil text-primary"></i>}
              className="btn-default btn-sm"
              onBtnClick={() => handleButtonClick(data)}
            />{" "}
          <ButtonForm
            label={<i className="fa fa-trash-can text-danger"></i>}
            className="btn-default btn-sm"
            onBtnClick={() => handleDeleteButton(data,)}
          />
        </>
      ),
    }));

    setJson(newJson);
  }, []);

  const searchInfo = (data) => {
    console.log(data);
  };

  return (
    <>
      <Breadcrumb breadCrumb="Recolección" />
      <button
        type="button"
        onClick={() => handleButtonClick(null)}
        className="btn btn-outline-info text-primary btn-sm m-1">
        Agregar recolección
      </button>
      <SearchFilterHarvest onDataSearch={searchInfo} />
      {showModal && (<HarvestModal onClose={handleCloseModal} title={modalTitle} data={modalData} />)}
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
