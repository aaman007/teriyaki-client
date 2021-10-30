import classes from './ProductItem.module.css';
import Card from "../../ui/Card";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import {cartActions} from "../../../store/slices/cart";
import {useEffect, useState} from "react";

const ProductItem = ({ product }) => {
    const dispatch = useDispatch();
    const [showButtonAnimation, setShowButtonAnimation] = useState(false);

    useEffect(() => {
        if (showButtonAnimation) {
            const timeout = setTimeout(() => {
                setShowButtonAnimation(false);
            }, 500);

            return () => {
                clearTimeout(timeout);
            }
        }
    }, [showButtonAnimation])

    const handleAddToCart = () => {
        dispatch(cartActions.addToCart(product));
        setShowButtonAnimation(true);
    };

    return (
        <Card className={classes.product}>
            <div className={classes.name}> {product.name} </div>
            <div className={classes.price}> BDT {product.price} </div>
            <div className={classes.description}> {product.description} </div>
            <div>
                <Button
                    className={showButtonAnimation && classes.buttonAnimated}
                    onClick={handleAddToCart}
                > Add to cart </Button>
            </div>
        </Card>
    )
};

export default ProductItem;