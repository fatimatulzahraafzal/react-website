import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import iconCart from '../assets/images/iconCart.png';
import headerLogo from '../assets/images/logo-1.png';
import { useSelector, useDispatch } from 'react-redux';
import { toggleStatusTab } from '../stores/cart';
import './header.css'; // Import the CSS file

const Header = () => {
    const [totalQuantity, setTotalQuantity] = useState(0);
    const carts = useSelector(store => store.cart.items);
    const dispatch = useDispatch();

    useEffect(() => {
        let total = 0;
        carts.forEach(item => total += item.quantity);
        setTotalQuantity(total);
    }, [carts]);

    const handleOpenTabCart = () => {
        dispatch(toggleStatusTab());
    };

    return (
        <header className="header">
            <img src={headerLogo} />

            <nav className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/products">Products</Link>
                <Link to="/more-info">Partners</Link>
            </nav>

            <div className="cart-container" onClick={handleOpenTabCart}>
                <img src={iconCart} alt="Shopping Cart" />
                <span className="cart-quantity">{totalQuantity}</span>
            </div>
        </header>
    );
};

export default Header;