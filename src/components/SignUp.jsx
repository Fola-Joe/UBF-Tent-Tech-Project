

export default function SignUp() {
    return (
        <div>
            <img src="./ubf_logo6.png" alt="ubf logo" />
            <section>
                <h1>Sign Up</h1>
                <h2>Create an account</h2>
                <form action="#">
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
                </form>
            </section>
        </div>
    )
}