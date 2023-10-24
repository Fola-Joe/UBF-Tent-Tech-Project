import './Index.css';

export default function ResetPage() {
    const handleForm = (e) => {
        e.preventDefault();
    }

    return (
        <div className="ResetPage">
            <img src="./ubf_logo6.png" alt="ubf logo" className="logo" />
            <h2 className="reset-h2">Reset Password</h2>
            <p className="reset-word">
                Enter email address and a link will be sent to reset
                your password
            </p>
            <form className="reset-form" onSubmit={handleForm} >
                <label htmlFor="reset-email">Email Address</label>
                <input
                    type="email"
                    name="reset-email"
                    className="reset-email"
                    placeholder="Enter email address"
                />
                <button className="reset-btn">Reset Password</button>
            </form>
        </div>
    )
}