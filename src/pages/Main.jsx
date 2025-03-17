import { useEffect } from "react";
import { Wrapper } from "../components/Wrapper";
import { useDispatch, useSelector } from "react-redux";
import { getGunsThunk } from "../store/gunActions";
import SingleGun from "../components/SingleGun";
import { Button } from "../components/UI/Button";
import { useNavigate } from "react-router";

export const Main = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { guns } = useSelector((state) => state);
  const onEditGun = (id) => {
    navigate(`update/${id}`);
  };
  useEffect(() => {
    dispatch(getGunsThunk());
  }, []);

  return (
    <Wrapper>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Main</h1>
        <Button variant="primary" onClick={() => navigate("create")}>
          Add gun
        </Button>
      </div>
      <div>
        {guns.map((item) => {
          return <SingleGun key={item.id} onEdit={onEditGun} {...item} />;
        })}
      </div>
    </Wrapper>
  );
};
