import React from 'react';
import './login-form.css';

function LoginForm() {
    const [emailValue, setEmailValue] = React.useState<string>("");
    const [passwordValue, setPasswordValue] = React.useState<string>("");

    const handleEmailChange = (event : React.ChangeEvent<HTMLInputElement>) : void => {
        setEmailValue(event.target.value);
    } 

    const handlePasswordChange = (event : React.ChangeEvent<HTMLInputElement>) : void => {
        setPasswordValue(event.target.value);
    } 

    return (
        <section id="login_form">
            <form>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" value={emailValue} onChange={handleEmailChange} />
                </div>

                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" value={passwordValue} onChange={handlePasswordChange} />
                </div>

                <div>
                    <button type="button">Submit</button>
                </div>
            </form>

            <p>If you do not yet have an account, sign up <a href="/here">here.</a></p>
        </section>
    )
}

export default LoginForm
