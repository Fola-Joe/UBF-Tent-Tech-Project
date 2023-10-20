import './SignUp.css';

export default function SignUp() {
    return (
        <div className="SignUp">
            <img src="./ubf_logo6.png" alt="ubf logo" className="logo"/>
            <section className="sign-up-sect">
                <h1>Sign Up</h1>
                <h2>Create an account</h2>
                <form action="#" className="sign-up-form">
                    <div className="full-name">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" name="name" placeholder="Enter full name" />
                    </div>
                    <div className="address">
                        <label htmlFor="lone-address">Email Address</label>
                        <input type="text" name="lone-address" placeholder="Enter email address" />
                    </div>
                    <div className="password">
                        <label htmlFor="name">Password</label>
                        <input type="text" name="password" placeholder="Create Password" />
                    </div>
                    <button className="sign-up-btn">Sign Up</button>
                </form>
                <div className="google-sign-up">
                    <img src="./google.png" alt="google icon" />
                    <p>Sign up with Google</p>
                </div>
                <section>
                    <h3>Have an account? <span>Log in</span></h3>
                </section>
            </section>
        </div>
    )
}