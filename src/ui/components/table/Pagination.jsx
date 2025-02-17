import { useMemo } from "react";
import { Link } from "react-router";

export const Pagination = ({
  items = 0,
  page = 0,
  pageSize = 10,
  onPageChange,
}) => {
  const pages = Math.ceil(items / pageSize);

  const pageItems = useMemo(() => {
    const items = [];
    for (let i = 0; i < pages; i++) {
      items.push(
        <li
          key={`li-${i}`}
          className={`page-item ${page === i ? "active" : ""}`}>
          <Link
            className="page-link"
            onClick={(e) => {
              e.preventDefault();
              onPageChange(i);
            }}>
            {i + 1}
          </Link>
        </li>
      );
    }
    return items;
  }, [pages, page, onPageChange]);

  return (
    <>
      <nav aria-label="Page navigation example">
        <small
          className="text-primary"
          style={{ position: "fixed", opacity: "0.6", fontSize: '0.7rem' }}>
          Registros: {Math.min(pageSize * (page + 1), items)} de {items}
        </small>
        <ul className="pagination justify-content-center pagination-sm">
          <li className={`page-item ${page === 0 ? "disabled" : ""}`}>
            <Link
              className="page-link"
              onClick={(e) => {
                e.preventDefault();
                onPageChange(0);
              }}>
              {"<<"}
            </Link>
          </li>
          <li className={`page-item ${page === 0 ? "disabled" : ""}`}>
            <Link
              className="page-link"
              onClick={(e) => {
                e.preventDefault();
                onPageChange(page - 1);
              }}>
              {"<"}
            </Link>
          </li>
          {pageItems}
          <li className={`page-item ${page === pages - 1 ? "disabled" : ""}`}>
            <Link
              className="page-link"
              onClick={(e) => {
                e.preventDefault();
                onPageChange(page + 1);
              }}>
              {">"}
            </Link>
          </li>
          <li className={`page-item ${page === pages - 1 ? "disabled" : ""}`}>
            <Link
              className="page-link"
              onClick={(e) => {
                e.preventDefault();
                onPageChange(pages - 1);
              }}>
              {">>"}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
