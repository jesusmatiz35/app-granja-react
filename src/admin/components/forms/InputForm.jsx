export const InputForm = ({ className='col-md', style={}, type = 'text', label = 'Label', name = 'date', defaultValue = '', min=0, disabled=false, onInputChange }) => {
  
  return (
    <div className={className}>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        min={min}
        disabled={disabled}
        defaultValue={defaultValue}
        className={`form-control ${className}`}
        style={style}
        onChange={onInputChange}
      />
    </div>
  );
};
