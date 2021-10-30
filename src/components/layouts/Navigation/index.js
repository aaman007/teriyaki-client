import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { authActions } from "../../../store/slices/auth";
import * as urls from '../../../urls';
import classes from './Navigation.module.css';
import Container from "../../ui/Container";
import Button from "../../ui/Button";

const Navigation = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state?.auth.isLoggedIn);

    const handleLogout = () => {
        dispatch(authActions.logout({}));
    };

    const handleLogin = () => {
        dispatch(authActions.login({}));
    };

    return (
        <nav className={classes.navbar}>
            <Container>
                <div className={classes.navWrapper}>
                    <div className={classes.brand}>
                        Teriyaki
                    </div>
                    <div className={classes.linksWrapper}>
                        <ul className={classes.links}>
                            <NavLink activeClassName={classes.active} to={urls.home()}> Home </NavLink>
                            {isLoggedIn && <NavLink activeClassName={classes.active} to={urls.orders()}> Orders </NavLink>}
                        </ul>
                        {isLoggedIn && <Button onClick={handleLogout}> Logout </Button>}
                        {!isLoggedIn && <Button onClick={handleLogin}> Login </Button>}
                    </div>
                </div>
            </Container>
        </nav>
    )
}

export default Navigation;