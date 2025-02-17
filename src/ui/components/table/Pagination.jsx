import { useEffect, useState } from "react";

export const Pagination = ({ items = 0, page = 0, pageSize = 10 }) => {
  const pages = items / pageSize;

  const [show, setShow] = useState([]);

  useEffect(() => {
    for (let i = 0; i < pages; i++) {
      setShow([
        ...show,
        <li key={`li-${i}`} className={`page-item ${ page === 0 ? 'active' : ''}`}>
          <a className="page-link" href="#">
            {i + 1}
          </a>
        </li>,
      ]);
    }
  }, [items, pageSize]);

  return (
    <>
      <nav aria-label="Page navigation example">
        <small
          className="text-primary"
          style={{ position: "absolute", opacity: "0.6" }}>
          Registros: {pageSize * (page + 1)} de {items}
        </small>
        <ul className="pagination justify-content-center pagination-sm">
          <li className="page-item disabled">
            <a className="page-link" href="#">
              {"<<"}
            </a>
          </li>
          <li className="page-item disabled">
            <a className="page-link" href="#">
              {"<"}
            </a>
          </li>
          { show.map( (p) => (p) ) }          
          <li className="page-item">
            <a className="page-link" href="#">
              {">"}
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              {">>"}
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
