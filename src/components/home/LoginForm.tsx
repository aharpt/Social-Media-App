import React from 'react';
import './login-form.css';

interface formErrors {
    emptyEmail: boolean,
    emptyPassword: boolean,
    invalidEmail: boolean,
}

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const initialErrorState = {
    emptyEmail: false,
    emptyPassword: false,
    invalidEmail: false,
};

function LoginForm() {
    const [emailValue, setEmailValue] = React.useState<string>("");
    const [passwordValue, setPasswordValue] = React.useState<string>("");
    const [errors, setErrors] = React.useState<formErrors>(initialErrorState);

    const handleEmailChange = (event : React.ChangeEvent<HTMLInputElement>) : void => {
        setEmailValue(event.target.value);
    } 

    const handlePasswordChange = (event : React.ChangeEvent<HTMLInputElement>) : void => {
        setPasswordValue(event.target.value);
    }

    const onSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        if (emailValue === "") {
            setErrors({
                ...errors,
                emptyEmail: true,
            })
        } else if (passwordValue === "") {
            setErrors({
                ...errors,
                emptyPassword: true,
            })
        } else if (!emailRegex.test(emailValue.toLowerCase())) {
            setErrors({
                ...errors,
                invalidEmail: true,
            })
        } else {
            setErrors(initialErrorState);
        }
    }

    return (
        <section id="login_form">
            <form onSubmit={onSubmit} noValidate={true}>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" value={emailValue} onChange={handleEmailChange} />
                </div>

                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" value={passwordValue} onChange={handlePasswordChange} />
                </div>

                {errors.emptyEmail && <span className="error-text">Email field cannot be left blank</span>}
                {errors.emptyPassword && <span className="error-text">Password field cannot be left blank</span>}
                {errors.invalidEmail && <span className="error-text">Email is not the correct format</span>}

                <div id="submit_container">
                    <button type="submit">Submit</button>
                </div>
                
            </form>

            <p>If you do not yet have an account, sign up <a href="/here">here.</a></p>
        </section>
    )
}

export default LoginForm
