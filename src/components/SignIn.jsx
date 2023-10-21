import './SignUp.css';

export default function SignIn() {
    const handleForm = (e) => {
        e.preventDefault();
    }

    return (
        <div className="SignIn">
            <img src="./ubf_logo6.png" alt="ubf logo" className="logo" />
            <section className="sign-up-sect">
                <h1>Sign In</h1>
                <h2>Access your account</h2>
                <form className="sign-up-form" onSubmit={handleForm}>
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
                    <div className="forgot-password">
                        <div className="remember-me">
                            <input type="checkbox" name="check" id="checkbox" />
                            <label htmlFor="check">Remember Me</label>
                        </div>
                        <p className="forgot-pword">Forgot Password?</p>
                    </div>
                    <button className="sign-up-btn">Sign In</button>
                </form>
                <div className="google-sign-in">
                    <img src="./google.png" alt="google icon" />
                    <p>Continue with Google</p>
                </div>
                <section className="switch-login">
                    <h3>Don't have an account? <span>Sign up</span></h3>
                </section>
            </section>
        </div>
    )
}