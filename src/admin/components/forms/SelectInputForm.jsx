export const SelectInput = ({ label = 'LabelText', name='shed', className = "col-md", defaultValue = '', options = [], onSelectChange }) => {
  return (
    <div className={className}>
      <label>{label}</label>
      <select
        onChange={onSelectChange}
        name={name}
        className="form-select form-select-sm"
        style={{ height: "38px" }}
        defaultValue={defaultValue}>
        <option value="">Seleccione una opción</option>
        {options.map(({ value, viewValue }, index) => (
          <option key={`${value}-${index}`} value={value}>
            {viewValue}
          </option>
        ))}
      </select>
    </div>
  );
};
