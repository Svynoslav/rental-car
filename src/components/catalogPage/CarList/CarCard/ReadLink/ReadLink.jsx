import LinkTemp from "../../../../templates/LinkTemp/LinkTemp";

export default function ReadLink({ id }) {
  return <LinkTemp path={`cars/${id}`}>Read more</LinkTemp>;
}
