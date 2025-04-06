import ButtonTemp from "../../templates/ButtonTemp/ButtonTemp";

export default function LoadBtn({ onClick }) {
  return (
    <ButtonTemp variant="load" onClick={onClick}>
      Load more
    </ButtonTemp>
  );
}
