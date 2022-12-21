import { Outlet } from "react-router";
import { Fragment,useContext } from "react";
import { Link } from "react-router-dom";
import CartIcon from "../Shop/CartIcon/cart-icon.component";
import { ReactComponent as CrownLogo } from '../asset/crown.svg';
import { UserContext } from "../Context/user.context.jsx";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartDrownDown from '../Shop/CartDropDown/cart-dropdown.component';
import { CartContext } from "../Context/cart.context";
import './Navigation.scss';
const Navigation = () => {
    const {currentUser} = useContext(UserContext); //Whenever this value (currentUser) update, then re-render. 
                                                    //useState has been updated, currentUser
    const {isCaption} = useContext(CartContext);

    
    return(
        <Fragment>
            <div className="navigation">
                <CrownLogo className="logo-container" />
                <div className="nav-links-container">
                <Link className="nav-link" to='/'>Home</Link>
                    <Link className="nav-link" to='/shop'>Shop</Link>
                    {
                        currentUser ? ( //if currentUser exists, then display signout button, Otherwise, display sign in
                            <span className="nav-link" onClick={signOutUser}>SIGN-OUT</span> 
                        ):(<Link className="nav-link" to='/LogIn'>LogIn</Link>)
                    }
                    <CartIcon  />
                </div>
                {isCaption && <CartDrownDown />} 
                {/* if True return the last thing */}
            </div>
            
            <Outlet />
        </Fragment>
    )
};

export default Navigation;