export const InputForm = ({ className='col-md', type = 'text', label = 'Label', name = 'date', defaultValue = '', min=0, disabled=false, onInputChange }) => {
  
  const isNumber = type === 'number';

  return (
    <div className={className}>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        min={min}
        disabled={disabled}
        defaultValue={defaultValue}
        className="form-control"
        onChange={onInputChange}
      />
    </div>
  );
};
