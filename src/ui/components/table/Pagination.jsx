export const Pagination = () => {
  return (
    <>
      <nav aria-label="Page navigation example">
        <small className="text-primary" style={ { position: 'absolute', opacity: '0.6' } }>Registros: 3 de 3</small>
        <ul className="pagination justify-content-center pagination-sm">
        <li className="page-item disabled">
            <a className="page-link" href="#">
              {'<<'}
            </a>
          </li>
          <li className="page-item disabled">
            <a className="page-link" href="#">
              {'<'}
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              {'>'}
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              {'>>'}
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
