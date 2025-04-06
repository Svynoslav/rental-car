import ButtonTemp from "../../../templates/ButtonTemp/ButtonTemp";

export default function SendBtn({ onClick }) {
  return (
    <ButtonTemp variant="send" onClick={onClick}>
      Send
    </ButtonTemp>
  );
}
