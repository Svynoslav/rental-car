import LinkTemp from "../../../../templates/LinkTemp/LinkTemp";

export default function ReadLink({ id }) {
  return <LinkTemp path={`catalog/${id}`}>Read more</LinkTemp>;
}
