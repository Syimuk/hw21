import { useEffect, useState } from "react";
import { Input } from "./Input";
import styled from "styled-components";
import { Button } from "./Button";
import { useNavigate } from "react-router";

export const Form = (props) => {
  const { buttonText, onCancel, submitForm, initialData } = props;
  const navigate = useNavigate();

  const [data, setData] = useState({
    gun: "",
    color: "",
    aim: "",
    magazine: 0,
  });

  function dataValueHandler(e) {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  useEffect(() => {
    if (initialData) {
      setData(initialData);
    }
  }, [initialData]);

  function onSubmit(e) {
    e.preventDefault();
    submitForm(data);
    setData({
      gun: "",
      color: "",
      aim: "",
      magazine: 0,
    });
  }

  return (
    <StyledForm onSubmit={onSubmit}>
      <Input
        placeholder="gun"
        value={data.gun}
        name="gun"
        onChange={dataValueHandler}
      />
      <Input
        placeholder="color"
        value={data.color}
        name="color"
        onChange={dataValueHandler}
      />
      <Input
        placeholder="aim"
        value={data.aim}
        name="aim"
        onChange={dataValueHandler}
      />
      <Input
        placeholder="magazine"
        value={data.magazine}
        name="magazine"
        onChange={dataValueHandler}
      />
      <div>
        <Button variant="primary" type="submit">
          {buttonText}
        </Button>
        <Button variant="danger" type="button" onClick={onCancel}>
          Cansel
        </Button>
      </div>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  max-width: 500px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
