import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { CartProvider } from '../context/cardcontext';
import Navbar from './navbar';
import Footer from './footer';
import Cart from './cart';
import Checkout from './checkout';

/**
 * App shell shared by every route: nav, footer, cart drawer, checkout modal.
 */
export default function Layout() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

    return (
        <HelmetProvider>
            <CartProvider>
                <Navbar onCartClick={() => setIsCartOpen(true)} />
                <main>
                    <Outlet />
                </main>
                <Footer />

                <Cart
                    isOpen={isCartOpen}
                    onClose={() => setIsCartOpen(false)}
                    onCheckout={() => {
                        setIsCartOpen(false);
                        setIsCheckoutOpen(true);
                    }}
                />
                <Checkout isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
            </CartProvider>
        </HelmetProvider>
    );
}
