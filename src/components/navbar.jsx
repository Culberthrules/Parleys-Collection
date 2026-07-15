import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiShoppingBag, FiMenu, FiX } from 'react-icons/fi';
import { useCart } from '../context/cardcontext';
import { BRAND_EMOJI } from '../constants/brand';
import '../styles/navbar.scss';

const NAV_LINKS = [
    { label: 'Home', to: '/', end: true },
    { label: 'Features', to: '/#features', end: false },
    { label: 'Shop', to: '/products', end: false },
];

export default function Navbar({ onCartClick }) {
    const { totalCount } = useCart();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 12);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__inner">
                <Link to="/" className="navbar__logo" onClick={() => setIsMenuOpen(false)}>
                    Parleys {BRAND_EMOJI} <span>Collection</span>
                </Link>

                <nav className={`navbar__links ${isMenuOpen ? 'navbar__links--open' : ''}`}>
                    {NAV_LINKS.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            end={link.end}
                            className={({ isActive }) => (isActive ? 'navbar__link--active' : undefined)}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="navbar__actions">
                    <button
                        type="button"
                        className="navbar__cart"
                        onClick={onCartClick}
                        aria-label={`Open cart, ${totalCount} item${totalCount === 1 ? '' : 's'}`}
                    >
                        <FiShoppingBag aria-hidden="true" />
                        {totalCount > 0 && <span className="navbar__cart-badge">{totalCount}</span>}
                    </button>

                    <button
                        type="button"
                        className="navbar__menu-toggle"
                        onClick={() => setIsMenuOpen((open) => !open)}
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
                    </button>
                </div>
            </div>
        </header>
    );
}
