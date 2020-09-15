import React, { useState } from "react";
import StyledLogin from "./styled/StyledLogin";
import {axiosWithAuth} from "../utils/axiosWithAuth";

const defaultFormValues = {
    username: "",
    password: "",
}

const Login = () => {
    const [formValues, setFormValues] = useState(defaultFormValues);
    const [formErrors, setFormErrors] = useState(defaultFormValues);
    const [isSending, setIsSending] = useState(false);

    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormValues({...formValues, [name]: value});
        if(value === ""){
            setFormErrors({...formErrors, [name]: `Please enter a ${name}`});
        }
        else
        {
            setFormErrors({...formErrors, [name]: ""});
        }
    }

    const submitHandler = (event) => {
        event.preventDefault();
        setIsSending(true);
        axiosWithAuth().post("/api/login", formValues);
    }

    return(
        <StyledLogin>
            <form>
                <label>Username:
                    <input type="text" name="username" value={formValues.username} onChange={changeHandler} />
                </label>
                <label>Password:
                    <input type="text" name="password" value={formValues.password} onChange={changeHandler} />
                </label>
                <button onClick={submitHandler}>Login</button>
            </form>
            <div class="errors">
                {Object.array(formErrors).map(error => <div key={error}>{error}</div>)}
            </div>
            {isSending && <div class="sending">Sending...</div>}
        </StyledLogin>
    )
}

export default Login;