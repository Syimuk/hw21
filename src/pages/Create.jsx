import { useDispatch, useSelector } from "react-redux";
import { Form } from "../components/UI/Form";
import { Wrapper } from "../components/Wrapper";
import { useNavigate } from "react-router";
import { createGunThunk, getGunsThunk } from "../store/gunActions";
import Spinner from "../components/UI/Spinner";

export const Create = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state);
  function goBack() {
    navigate("/main");
  }

  async function createGun(params) {
    dispatch(createGunThunk(params));
    goBack();
    dispatch(getGunsThunk())
  }

  return (
    <Wrapper>
      <h1>Create</h1>
      {isLoading && <Spinner />}
      {error && <p>Error</p>}
      <Form buttonText="save" onCancel={goBack} submitForm={createGun} />
    </Wrapper>
  );
};
