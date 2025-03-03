import { useNavigate, useParams } from "react-router";
import { Breadcrumb } from "../../../../ui/components/Breadcrumb";
import { InfoShed } from "./InfoShed";
import { CostPage } from "../../cost/CostPage";
import { HarvestPage } from "../../harvest/HarvestPage";
import { useEffect, useState } from "react";
import { FeedPage } from "../../feed/FeedPage";

export const ShedDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isProduction, setIsProduction] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsProduction(true));
  }, [id]);

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <>
      <Breadcrumb breadCrumb="Galpones / Detalles" />
      <button
        onClick={handleBackClick}
        className="btn btn-outline-info text-primary btn-sm m-1">
        <i className="fa fa-solid fa-rotate-left"></i> Volver
      </button>
      <InfoShed />      
      {isProduction && (
        <>
          <hr className="m-0 p-1" />
          <HarvestPage />
        </>
      )}
      <hr className="m-0 p-1" />
      <FeedPage />
      <hr className="m-0 p-1" />
      <CostPage />
    </>
  );
};
