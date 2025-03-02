import { useEffect, useState } from "react";
import { Table } from "../../../ui/components/table";
import { ButtonForm, LoadingMessage } from "../../components";
import { CostModal } from "./CostModal";

const headers = [
  { title: "Descripción" },
  { title: "Cantidad" },
  { title: "Valor" },
  { title: "Fecha de registro" },
  { title: "Acción" },
];

const columns = [
  { column: "description" },
  { column: "amount" },
  { column: "cost" },
  { column: "created_at" },
  { column: "action" },
];

const data = [
  {
    description: "Cuido Prepico 100 Dorado",
    amount: "28",
    cost: "$2.424.000",
    created_at: "25-02-2025",
  },
];

export const CostPage = () => {
  const [json, setJson] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleButtonClick = (d) => {
    console.log({ borrar: 'borrar', ...d });
  };

  const handleAddCost = () => {
    setShowModal(true);
  }

  const handleCloseModal = (result) => {
    console.log(result);
    setShowModal(false);
  };

  const sleepLoading = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  useEffect(() => {
    sleepLoading();

    const newJson = data.map((d) => ({
      ...d,
      action: (
        <>
          <ButtonForm
            label={<i className="fa fa-trash-can text-danger"></i>}
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
      <div className="card mb-2">
        <div className="card-header d-flex justify-content-between align-items-center p-2">
          <small>Costos</small>
          <div className="d-flex align-items-center" style={{textAlign: 'right'}}>
          <ButtonForm
              label=""
              type="button"
              disabled={isLoading}
              onBtnClick={() => console.log("Mostrar costo del huevo")}
              icon="fa-solid fa-egg text-warning"
              className="btn-outline-info btn-sm"
            />
            <span>&nbsp;</span>
            <ButtonForm
              label=""
              type="button"
              disabled={isLoading}
              onBtnClick={handleAddCost}
              icon="fa-solid fa-plus"
              className="btn-outline-success btn-sm"
            />
          </div>
        </div>
        {showModal && <CostModal title="Agregar Costo" onClose={handleCloseModal} />}
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
