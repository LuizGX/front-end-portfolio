import "./FormInput.scss";

interface Props {
  fieldName: string;
  placeholder: string;
}

function FormInput({ fieldName, placeholder }: Props) {
  return (
    <input
      type="text"
      className="form-input"
      name={fieldName}
      placeholder={placeholder}
    />
  );
}

export default FormInput;
