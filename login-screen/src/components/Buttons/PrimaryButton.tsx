import "./PrimaryButton.scss";

interface Props {
  text: string;
  onClick: () => void;
}

function PrimaryButton({ text, onClick }: Props) {
  return (
    <button onClick={onClick} className="primary-button" type="submit">
      {text}
    </button>
  );
}

export default PrimaryButton;
