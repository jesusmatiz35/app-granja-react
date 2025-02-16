
export const FormButton = ({ type = 'button', className='', disabled=false, label, onButtonClick }) => {

  return (
    <>
      <button
        type={type}
        className={ `btn ${className}` }
        onClick={onButtonClick}
        disabled={disabled}>
        {label}
      </button>
    </>
  );
};
