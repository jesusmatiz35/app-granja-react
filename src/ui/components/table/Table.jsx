import { useId } from "react";
import { Pagination } from "./Pagination";

export const Table = ({
  caption = "",
  headers = [{ title }],
  columns = [{ column }],
  data = [{}],
}) => {
  const tableId = useId();

  return (
    <>
      <div className="table-responsive">
        <table className="table caption-top table-hover table-striped table-sm">
          { caption.length > 0 && <caption>{caption}</caption> }
          <thead className="table-light">
            <tr>
              {headers.map(({ title }, index) => (
                <th key={`thead-th-${tableId}-${index}`}>{title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((json, rowIndex) => {
              return (
                <tr key={`row-${tableId}-${rowIndex}-tr`}>
                  {columns.map(({ column }, colIndex) => (
                    <td key={`${tableId}-${rowIndex}-${column}-${colIndex}`}>
                      {json[column]}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination items={data.length} page={0} pageSize={50} />
      </div>
    </>
  );
};
