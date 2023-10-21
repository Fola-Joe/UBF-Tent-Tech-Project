import './SignUp.css';

export default function SignUp() {
    return (
        <div className="SignUp">
            <img src="./ubf_logo6.png" alt="ubf logo" className="logo" />
            <section className="sign-up-sect">
                <h1>Sign Up</h1>
                <h2>Create an account</h2>
                <form className="sign-up-form">
                    <div className="full-name">
                        <label htmlFor="name" className="name-label">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter full name"
                            className="name-input"
                        />
                    </div>
                    <div className="address">
                        <label htmlFor="lone-address" className="email-label">Email Address</label>
                        <input
                            type="email"
                            name="lone-address"
                            placeholder="Enter email address"
                            className="email-input"
                        />
                    </div>
                    <div className="password">
                        <label htmlFor="password" className="password-label">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Create Password"
                            className="password-input"
                        />
                    </div>
                    <button className="sign-up-btn">Sign Up</button>
                </form>
                <div className="google-sign-up">
                    <img src="./google.png" alt="google icon" />
                    <p>Sign up with Google</p>
                </div>
                <section className="switch-login">
                    <h3>Have an account? <span>Log in</span></h3>
                </section>
            </section>
        </div>
    )
}