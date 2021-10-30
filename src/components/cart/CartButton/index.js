import ReactDOM from 'react-dom';
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { cart as cartUrl } from "../../../urls";
import Button from "../../ui/Button";
import classes from './CartButton.module.css';
import CartIcon from '../../../assets/icons/cart.svg';

const overlaysRoot = document.getElementById('overlays-root');

const checkUrlMatch = (urlA, urlB = cartUrl()) => {
    let ret = false;
    ret |= urlB === urlA;
    ret |= `${urlB}/` === urlA;
    return !ret
}

const CartButton = () => {
    const history = useHistory();
    const totalQuantity = useSelector(state => state?.cart.totalQuantity);
    const totalAmount = useSelector(state => state?.cart.totalAmount);
    const showCart = checkUrlMatch(history.location.pathname);

    const handleClick = () => {
        history.push(cartUrl());
    }

    if (!showCart) {
        return null;
    }

    return ReactDOM.createPortal(
        <Button className={classes.cartButton} onClick={handleClick}>
            <div className={classes.quantity}>
                <img src={CartIcon} alt={'Cart'} />
                {totalQuantity} item(s)
            </div>
            <div className={classes.amount}>
                BDT {totalAmount}
            </div>
        </Button>,
        overlaysRoot
    )
};

export default CartButton;