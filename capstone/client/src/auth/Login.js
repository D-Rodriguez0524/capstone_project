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
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Login.css";

const LoginForm = ({ login }) => {
  const INITIAL_STATE = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    console.log(e);
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    await login(formData);
    setFormData(INITIAL_STATE);
    history.push("/");
  };

  return (
    <div className="Login">
      <Card
        style={{ width: "30rem", backgroundColor: "black", opacity: "0.8" }}
      >
        <CardBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="username" style={{ color: "white" }}>
                Username:{" "}
              </Label>
              <Input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
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
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
              />
            </FormGroup>
            <Button type="submit"> Enter</Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default LoginForm;
