import React, { useState } from "react";
import {
    Card,
    CardBody,
    Button,
    FormGroup,
    Input,
    Label,
    Form
} from "reactstrap";

const LoginForm = () => {
    const INITIAL_STATE = {
        username: "",
        password: "",
    };

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();

        setFormData(INITIAL_STATE);
    };
    return (
        <Card style={{ width: '20rem' }}>
            <CardBody>
                <Form>

                    <FormGroup>
                        <Label htmlFor="username">username: </Label>
                        <Input
                            type="text"
                            id="username"
                            name="username"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="password">password: </Label>
                        <Input
                            type="text"
                            id="password"
                            name="password"
                        />
                    </FormGroup>

                </Form>
            </CardBody>
        </Card>
    )
}

export default LoginForm;
