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
// import UserContext from "../useContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const SignupForm = ({ signup }) => {
    const INITIAL_STATE = {
        username: "",
        password: "",
    };

    const [formData, setFormData] = useState(INITIAL_STATE);
    const history = useHistory();


    console.debug(
        "SignupForm",
        "signup=", typeof signup,
        "formData=", formData,
    );


    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        await signup(formData)
        setFormData(INITIAL_STATE);
        history.push("/");
    };

    return (
        <Card style={{ width: '20rem' }}>
            <CardBody>
                <Form onSubmit={handleSubmit}>

                    <FormGroup>
                        <Label htmlFor="username">username: </Label>
                        <Input
                            type="text"
                            id="username"
                            name="username"
                            onChange={handleChange}
                            value={formData.username}
                            placeholder="Enter username"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="password">password: </Label>
                        <Input
                            type="text"
                            id="password"
                            name="password"
                            onChange={handleChange}
                            value={formData.password}
                            placeholder="Enter Password"
                        />
                    </FormGroup>
                    {/* <FormGroup>
                        <Label htmlFor="isRebellion">Rebellion: </Label>
                        <Input
                            type="checkbox"
                            id="isRebellion"
                            name="isRebellion"
                            onChange={handleChange}
                            value={isRebellion}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="isDarkside">Darkside: </Label>
                        <Input
                            type="checkbox"
                            id="isDarkside"
                            name="isDarkside"
                            onChange={handleChange}
                            value={isDarkside}
                        />
                    </FormGroup> */}
                    <Button type="submit" onSubmit={handleSubmit}>Submit</Button>
                </Form>
            </CardBody>
        </Card>
    )
}

export default SignupForm;