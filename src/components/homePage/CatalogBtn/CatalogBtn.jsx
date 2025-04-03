import { Link } from "react-router-dom";

import Button from "../../templates/Button/Button";

export default function CatalogBtn() {
  return (
    <Link to="/catalog">
      <Button variant="catalog">View Catalog</Button>
    </Link>
  );
}
