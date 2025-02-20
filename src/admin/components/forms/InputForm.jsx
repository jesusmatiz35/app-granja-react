export const InputForm = ({ className='col-md', type = 'text', label = 'Label', name = 'date', onInputChange }) => {
  return (
    <div className={className}>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        className="form-control"
        onChange={onInputChange}
      />
    </div>
  );
};
