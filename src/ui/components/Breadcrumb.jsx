import { useEffect, useState } from "react";

const initBreadcrumb = "";

export const Breadcrumb = ({ breadCrumb }) => {

  const [breadcrumb, setBreadcrumb] = useState(initBreadcrumb);

  useEffect(() => {
    onChangeBreadcrumb(breadCrumb);
  }, [breadCrumb]);

  const onChangeBreadcrumb = (bread) => {
    setBreadcrumb(bread);
  };

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item" aria-current="page">
            <small>Inicio</small>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <small>{breadcrumb}</small>
          </li>
        </ol>
      </nav>
    </>
  );
};
