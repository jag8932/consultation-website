import { redirect } from "react-router-dom";

export default function Login() {

    const handle_login = async(e) => {
        e.preventDefault();
        const pass1 = document.querySelector('#password1');
        const pass2 = document.querySelector('#password2');
        const username = document.querySelector('#username');


        console.log(username.value);
        if (!username.value || !pass1.value || !pass2.value) {
            console.log("All fields are required to be filled out.");
            return false;
        }

    }
    return (
        <>
            <form id="login-form"
                  action="/login"
                  method="post"
                  onSubmit={handle_login}
            >
                <h2 className="form-title">Login</h2>
                <label><strong>Username</strong>
                    <input type="text" name="username" id="username"></input>
                </label>
                
                <label><strong>Password</strong>
                    <input name="password" type="password" id="password"></input>
                </label>
                
                <label><strong>Retype password</strong>
                    <input type="password" id="password2"></input>
                </label>
                <br></br>
                <input type="submit" value="Login" />
            </form>
        </>
    )
}