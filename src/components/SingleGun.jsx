import { Button } from "./UI/Button";

const SingleGun = ({ id, gun, color, aim, magazine, onEdit }) => {
  return (
    <div>
      <div>
        <p>GUN: {gun}</p>
        <p>AIM: {aim}</p>
        <p>COLOR: {color}</p>
        <p>MAGAZINE: {magazine}</p>
      </div>
      <div>
        <Button variant="danger">DELETE</Button>
        <Button variant="primary" onClick={() => onEdit(id)}>
          EDIT
        </Button>
      </div>
    </div>
  );
};

export default SingleGun;
