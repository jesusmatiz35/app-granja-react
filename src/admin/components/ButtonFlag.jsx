
export const ButtonFlag = ({ icon = "fa-plus", onClickBtn }) => {

  return (
    <>
      <button
        type="button"
        onClick={() => { onClickBtn() }}
        className="btn btn-outline-info text-primary btn-sm m-1">
        <i className={`fa ${icon}`}></i>
      </button>      
    </>
  );
};
