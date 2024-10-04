import { redirect } from "react-router-dom";

export const Signup = () => {

    const handle_signup = async(e) => {
        e.preventDefault();
        const pass1 = document.querySelector('#password1');
        const pass2 = document.querySelector('#password2');
        const username = document.querySelector('#username');


        console.log(username.value);
        if (!username.value || !pass1.value || !pass2.value) {
            console.log("All fields are required to be filled out.");
          //  return false;
        }

        try {
            const response = await fetch('/api', {
                method: 'GET',
            });
            
            if (!response.ok) {
                throw new Error('Failed to submit');
              }
            
              const data = await response.json();
              console.log('Success:', data);
              return redirect("/login");
        } catch (error) {
            console.error("Error: ", error)
        }
    }
    return (
        <>
            <form id="login-form"
                  onSubmit={handle_signup}
            >
                <h2 className="form-title">Signup</h2>
                <label><strong>Username</strong>
                    <input id="username"></input>
                </label>
                
                <label><strong>Password</strong>
                    <input type="password" id="password1"></input>
                </label>
                
                <label><strong>Retype password</strong>
                    <input type="password" id="password2"></input>
                </label>
                <br></br>
                <button type="submit" id="submit-button">Signup</button>
            </form>
        </>
    )
}