import { useEffect, useState } from "react";
import { Table } from "../../../ui/components/table";
import { ButtonForm, LoadingMessage } from "../../components";
import { HarvestModal } from "./HarvestModal";

const headers = [
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

  const sleepLoading = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  const handleButtonClick = (data = {}) => {
    data === null
      ? setModalTitle("Registrar recolección")
      : setModalTitle(`Editar recolección`);
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
            onBtnClick={() => handleDeleteButton(data)}
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
      <div className="card mb-2">
        <div className="card-header d-flex justify-content-between align-items-center p-2">
          <small>Datos de recolección</small>
          <div
            className="d-flex align-items-center"
            style={{ textAlign: "right" }}>
            <ButtonForm
              label="Gráfico"
              type="button"
              disabled={false}
              onBtnClick={() => console.log("...")}
              icon="fa-solid fa-chart-line"
              className="btn-outline-info btn-sm"
            />
            <span>&nbsp;</span>
            <ButtonForm
              label="Registrar"
              type="button"
              disabled={false}
              onBtnClick={() => handleButtonClick(null)}
              icon="fa-solid fa-plus"
              className="btn-outline-success btn-sm"
            />
          </div>
        </div>
        {showModal && (<HarvestModal onClose={handleCloseModal} title={modalTitle} data={modalData} />) }
        {isLoading && <LoadingMessage message="Cargando..." />}
        {!isLoading && (
          <Table
            headers={headers}
            columns={columns}
            pageSize={5}
            data={json}
            totalItems={json.length}
          />
        )}
      </div>
    </>
  );
};
