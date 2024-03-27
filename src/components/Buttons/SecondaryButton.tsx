import "./SecondaryButton.scss";

interface Props {
  text: string;
  onClick: () => void;
}

function SecondaryButton({ text, onClick }: Props) {
  return (
    <button onClick={onClick} className="secondary-button" type="submit">
      {text}
    </button>
  );
}

export default SecondaryButton;
