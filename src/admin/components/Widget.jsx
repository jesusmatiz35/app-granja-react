import '../../assets/css/widget.css';

export const Widget = ({ subicon = 'fa-arrow-up', icon='fa-shopping-cart', title='Title', itemValue='3,243', subValue='12.5%', progressData='12.5%', cardClassName='l-bg-cherry', pgsClassName='l-bg-cyan' }) => {
  return (
    <>
      <div className="col-12 col-md-6 col-lg-3 col-xl-3">
        <div className={`card ${cardClassName}`}>
          <div className="card-statistic-3 p-4">
            <div className="card-icon card-icon-large">
              <i className={`fas ${icon}`}></i>
            </div>
            <div className="mb-4">
              <h5 className="card-title mb-0">{title}</h5>
            </div>
            <div className="row align-items-center mb-2 d-flex">
              <div className="col-8">
                <h2 className="d-flex align-items-center mb-0">{itemValue}</h2>
              </div>
              <div className="col-4 text-right">
                <span>
                  {subValue} <i className={`fa ${subicon}`}></i>
                </span>
              </div>
            </div>
            <div className="progress mt-1 " data-height="8" style={ { height: "8px" } }>
              <div
                className={`progress-bar ${pgsClassName}`}
                role="progressbar"
                data-width="50%"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{width: progressData}}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
