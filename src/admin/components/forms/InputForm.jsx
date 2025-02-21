export const InputForm = ({ className='col-md', type = 'text', label = 'Label', name = 'date', defaultValue = '', onInputChange }) => {
  return (
    <div className={className}>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className="form-control"
        onChange={onInputChange}
      />
    </div>
  );
};
