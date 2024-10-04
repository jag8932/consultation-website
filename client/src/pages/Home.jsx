import EmailForm from "../components/email_form";
import Login from "../components/login";

export default function Home() {

    return (
        <>
        <div className='hero'>
          <img src="engineering_1.jpg" alt="engineering picture"></img>
        </div>
          <h1>Engineering Consultation</h1>
          <button>Signup</button>
          <button >Login</button>
          <button>Explore our Products</button>
          <p>We sell unique 3d printed products. Schedule a consultation Meeting
             and we'll help you design the parts you need for your project.
          </p>
          <EmailForm />
          <Login />
          <footer>Hello</footer>
        </>
    );
}