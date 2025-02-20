export const ButtonForm = ({ label = "Save", type = 'button', disabled=false, className="", icon = '', onBtnClick}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onBtnClick}
      className={`btn ${className}`}>
      <i className={`fa ${icon}`}></i> {label}
    </button>
  );
};
