import { Outlet } from "react-router";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from '../asset/crown.svg';
import './Navigation.scss';
const nav = () => {
    return(
        <Fragment>
            <div className="navigation">
                <CrownLogo className="logo-container" />
                <div className="nav-links-container">
                <Link className="nav-link" to='/'>Home</Link>
                    <Link className="nav-link" to='/shop'>Shop</Link>
                    <Link className="nav-link" to='/LogIn'>LogIn</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
};

export default nav;