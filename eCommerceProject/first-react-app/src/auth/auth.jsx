import Register from "../component/Register/Register";
import SignIn from "../component/SignIn/SignIn";
import './login.styles.scss';
const LogIn = () => {

    return (
        <div className="auth-container">
            <SignIn/>
            <Register />
        </div>
    )
};

export default LogIn;