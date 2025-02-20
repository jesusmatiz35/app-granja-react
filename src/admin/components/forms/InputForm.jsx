export const InputForm = ({ className='col-md', type = 'text', label = 'Label', name = 'date', value = '', onInputChange }) => {
  return (
    <div className={className}>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        className="form-control"
        onChange={onInputChange}
      />
    </div>
  );
};
