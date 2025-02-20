export const SelectInput = ({ label = 'LabelText', className = "col-md", defaultValue = '', options = [], onSelectChange }) => {
  return (
    <div className={className}>
      <label>{label}</label>
      <select
        id="shed"
        onChange={onSelectChange}
        name="shed"
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
