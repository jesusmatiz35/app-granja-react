import { useId, useMemo, useState, useEffect } from "react";
import { Pagination } from "./Pagination";

export const Table = ({
  caption = "",
  headers = [{ title }],
  columns = [{ column }],
  pageSize = 10,
  data = [{}],
  totalItems = 10,
}) => {
  const tableId = useId();

  const [selectPage, setSelectPage] = useState(0);
  const [changePageSize, setChangePageSize] = useState(pageSize);

  const itemsPage = useMemo(() => {
    const startIndex = selectPage * changePageSize;
    const endIndex = startIndex + changePageSize;
    return data.length > pageSize ? data.slice(startIndex, endIndex) : data.slice(0, data.length);
  }, [data, changePageSize, selectPage]);

  const changePage = (value) => {
    const maxPage = Math.floor(data.length / changePageSize);
    if (value > maxPage) {
      value = maxPage;
    }
    setSelectPage(value);
  };

  const onChangePageSize = ({ target }) => {
    const { value } = target;
    setChangePageSize(Number(value));
    setSelectPage(0);
  };

  // Ajustar la página seleccionada cuando cambia el tamaño de la página
  useEffect(() => {
    const maxPage = Math.floor(data.length / changePageSize);
    if (selectPage > maxPage) {
      setSelectPage(maxPage);
    }
  }, [changePageSize, data.length, selectPage]);

  return (
    <>
      <div className="table-responsive shadow-sm card p-2">
        <div className="d-flex justify-content-between align-items-center mb-2">
          {caption.length > 0 && (
            <span className="caption-top mb-0">
              <small>{caption}</small>
            </span>
          )}
          <div className="d-flex align-items-center">
            <label htmlFor="show-pages" className="form-label mb-0 me-2">
              <small>Mostrar:</small>
            </label>
            <select
              id="show-pages"
              onChange={onChangePageSize}
              value={changePageSize}
              name="show-pages"
              className="form-select form-select-sm"
              style={{ width: "65px" }}>
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
          </div>
        </div>
        <table className="table caption-top table-hover table-striped table-sm">
          <thead className="table-light">
            <tr>
              {headers.map(({ title }, index) => (
                <th className="text-center" key={`thead-th-${tableId}-${index}`}>{title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {itemsPage.map((json, rowIndex) => {
              return (
                <tr key={`row-${tableId}-${rowIndex}-tr`}>
                  {columns.map(({ column }, colIndex) => (
                    <td className="text-center" key={`${tableId}-${rowIndex}-${column}-${colIndex}`}>
                      {json[column]}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination
          items={totalItems}
          page={selectPage}
          pageSize={changePageSize}
          onPageChange={changePage}
        />
      </div>
    </>
  );
};
