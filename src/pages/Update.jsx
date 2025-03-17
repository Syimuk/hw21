import { Wrapper } from "../components/Wrapper";
import { useNavigate, useParams } from "react-router";
import { Form } from "../components/UI/Form";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGunByIdThunk, updateGunThunk } from "../store/gunActions";

export const Update = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { gun } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getGunByIdThunk(id));
  }, [id, dispatch]);

  function goBack() {
    navigate("/main");
  }

  function updateGun(params) {
    dispatch(updateGunThunk(id, params)).then(() => {
      dispatch(getGunByIdThunk(id)); 
      goBack();
    });
  }

  return (
    <Wrapper>
      <h1>Update</h1>
      <Form
        buttonText="Update"
        onCancel={goBack}
        submitForm={updateGun}
        initialData={gun}
      />
    </Wrapper>
  );
};
