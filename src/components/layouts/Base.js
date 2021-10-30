import Navigation from './Navigation';
import CartButton from "../cart/CartButton";

const BaseLayout = ({ children }) => {
    return (
        <div>
            <Navigation />
            <CartButton />
            {children}
        </div>
    )
};

export default BaseLayout;