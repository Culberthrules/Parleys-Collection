import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { useCart } from '../context/cardcontext';
import { formatPrice } from '../data/productdata';
import { BRAND_NAME } from '../constants/brand';
import '../styles/checkout.scss';

// Falls back to a placeholder so the app still runs if the env var isn't set —
// but warns loudly in the console so it isn't missed in production.
const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '';

if (!WHATSAPP_NUMBER && import.meta.env.PROD) {
  // eslint-disable-next-line no-console
  console.warn('VITE_WHATSAPP_NUMBER is not set. Checkout will not be able to reach WhatsApp.');
}

function buildOrderMessage(cart, totalPrice, customer) {
  const lines = [
    `Hello ${BRAND_NAME}, I\u2019d like to place an order:`,
    '',
    ...cart.map(
      (item) =>
        `\u2022 ${item.name} (${item.brand}) x${item.quantity} — ${formatPrice(item.price * item.quantity, item.currency)}`
    ),
    '',
    `Subtotal: ${formatPrice(totalPrice)}`,
    '',
    `Name: ${customer.name}`,
    `Delivery address: ${customer.address}`,
  ];
  return lines.join('\n');
}

export default function Checkout({ isOpen, onClose }) {
  const { cart, totalPrice, clearCart } = useCart();
  const [customer, setCustomer] = useState({ name: '', address: '' });
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (cart.length === 0) {
      setError('Your cart is empty — add a piece from the collection before checking out.');
      return;
    }
    if (!customer.name.trim() || !customer.address.trim()) {
      setError('Please fill in your name and delivery address.');
      return;
    }
    if (!WHATSAPP_NUMBER) {
      setError('Checkout is temporarily unavailable. Please contact us directly.');
      return;
    }

    const message = buildOrderMessage(cart, totalPrice, customer);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    // Opens in a new tab rather than navigating away, so the storefront stays open
    window.open(url, '_blank', 'noopener,noreferrer');
    clearCart();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="checkout-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            className="checkout-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Checkout"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25 }}
          >
            <header className="checkout-modal__header">
              <h2>Confirm your order</h2>
              <button type="button" onClick={onClose} aria-label="Close checkout">
                <FiX />
              </button>
            </header>

            <div className="checkout-modal__summary">
              {cart.map((item) => (
                <div key={item.id} className="checkout-modal__line">
                  <span>
                    {item.name} × {item.quantity}
                  </span>
                  <span>{formatPrice(item.price * item.quantity, item.currency)}</span>
                </div>
              ))}
              <div className="checkout-modal__total">
                <span>Total</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="checkout-modal__form" noValidate>
              <label htmlFor="checkout-name">Full name</label>
              <input
                id="checkout-name"
                type="text"
                value={customer.name}
                onChange={(event) => setCustomer((c) => ({ ...c, name: event.target.value }))}
                placeholder="Your name"
                autoComplete="name"
              />

              <label htmlFor="checkout-address">Delivery address</label>
              <textarea
                id="checkout-address"
                value={customer.address}
                onChange={(event) => setCustomer((c) => ({ ...c, address: event.target.value }))}
                placeholder="Street, city, country"
                rows={3}
                autoComplete="street-address"
              />

              {error && (
                <p className="checkout-modal__error" role="alert">
                  {error}
                </p>
              )}

              <button type="submit" className="btn btn--primary checkout-modal__submit">
                Send order via WhatsApp
              </button>
              <p className="checkout-modal__note">
                You&rsquo;ll be redirected to WhatsApp to confirm your order with our team.
              </p>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
