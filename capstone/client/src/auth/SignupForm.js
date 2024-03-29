import React, { useState } from "react";
import {
  Card,
  CardBody,
  Button,
  FormGroup,
  Input,
  Label,
  Form,
} from "reactstrap";
// import UserContext from "../useContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./SignupForm.css";

const SignupForm = ({ signup }) => {
  const INITIAL_STATE = {
    username: "",
    password: "",
    isRebellion: false,
    isDarkside: false,
  };

  const [formData, setFormData] = useState(INITIAL_STATE);
  const history = useHistory();

  console.debug("SignupForm", "signup=", typeof signup, "formData=", formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    console.log(e);
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  const handleChecked = (e) => {
    const { name, checked } = e.target;
    console.log(name, checked);
    console.log(e);
    setFormData((fData) => ({
      ...fData,
      [name]: checked,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(formData);
    setFormData(INITIAL_STATE);
    history.push("/");
  };

  return (
    <div className="SignupForm">
      <Card
        style={{ width: "40rem", backgroundColor: "black", opacity: "0.8" }}
      >
        <CardBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup style={{ backgroundColor: "black" }}>
              <Label htmlFor="username" style={{ color: "white" }}>
                Username:{" "}
              </Label>
              <Input
                type="text"
                id="username"
                name="username"
                onChange={handleChange}
                value={formData.username}
                placeholder="Enter Username"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password" style={{ color: "white" }}>
                Password:{" "}
              </Label>
              <Input
                type="text"
                id="password"
                name="password"
                onChange={handleChange}
                value={formData.password}
                placeholder="Enter Password"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="isRebellion" style={{ color: "white" }}>
                Rebellion{" "}
              </Label>
              <Input
                type="checkbox"
                id="isRebellion"
                name="isRebellion"
                onChange={handleChecked}
                checked={formData.isRebellion}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="isDarkside" style={{ color: "white" }}>
                Darkside{" "}
              </Label>
              <Input
                type="checkbox"
                id="isDarkside"
                name="isDarkside"
                onChange={handleChecked}
                checked={formData.isDarkside}
              />
            </FormGroup>
            <Button type="submit" onSubmit={handleSubmit}>
              Submit
            </Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default SignupForm;
