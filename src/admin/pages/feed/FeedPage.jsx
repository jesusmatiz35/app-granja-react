import { useEffect, useState } from "react";
import { ButtonForm, LoadingMessage } from "../../components";
import { HarvestModal } from "../harvest/HarvestModal";
import { Table } from "../../../ui/components/table";

const headers = [
  { title: "Cantidad (kls)" },
  { title: "Fecha de consumo" },
  { title: "Fecha de registro" },
  { title: "Acción" },
];

const columns = [
    { column: "amount" },
    { column: "date_consumed" },
    { column: "created_at" },
    { column: "action" },
];

const feeds = [
  {
    feed_id: "xxxx-aaaa-bbbbbbb-cccc",
    amount: 32800,
    date_consumed: "02-03-2025",
    created_at: "03-03-2025",
  },
  {
    feed_id: "xxxx-aaaa-bbbbbbb-dddd",
    amount: 32500,
    date_consumed: "02-03-2025",
    created_at: "03-03-2025",
  },
  {
    feed_id: "xxxx-aaaa-bbbbbbb-eeee",
    amount: 32000,
    date_consumed: "02-03-2025",
    created_at: "03-03-2025",
  },
  {
    feed_id: "xxxx-aaaa-bbbbbbb-ffff",
    amount: 32500,
    date_consumed: "02-03-2025",
    created_at: "03-03-2025",
  },
];

export const FeedPage = () => {
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
    setModalData({ ...data, sheld: "Galpón X" });
    setShowModal(true);
  };

  const handleDeleteButton = (data) => {
    console.log(`Eliminar: ${data}`);
  };

  const handleCloseModal = (result) => {
    console.log(result);
    setShowModal(false);
  };

  useEffect(() => {
    sleepLoading();

    const newJson = feeds.map((data) => ({
      ...data,
      amount: (data.amount/1000).toFixed(2),
      action: (
        <>
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

  return (
    <div className="card mb-2">
      <div className="card-header d-flex justify-content-between align-items-center p-2">
        <small>Alimentación y Consumo</small>
        <div
          className="d-flex align-items-center"
          style={{ textAlign: "right" }}>
          <ButtonForm
            label=""
            type="button"
            disabled={isLoading}
            onBtnClick={() => handleButtonClick(null)}
            icon="fa-solid fa-plus"
            className="btn-outline-success btn-sm"
          />
        </div>
      </div>
      {showModal && (
        <HarvestModal
          onClose={handleCloseModal}
          title={modalTitle}
          data={modalData}
        />
      )}
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
  );
};
