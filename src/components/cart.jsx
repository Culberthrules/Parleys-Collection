import { AnimatePresence, motion } from 'framer-motion';
import { FiX, FiPlus, FiMinus, FiTrash2 } from 'react-icons/fi';
import { useCart } from '../context/cardcontext';
import { formatPrice } from '../data/productdata';
import '../styles/cart.scss';

export default function Cart({ isOpen, onClose, onCheckout }) {
  const { cart, totalPrice, incrementItem, decrementItem, removeFromCart } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="cart-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.aside
            className="cart-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <header className="cart-drawer__header">
              <h2>Your cart</h2>
              <button type="button" onClick={onClose} aria-label="Close cart">
                <FiX />
              </button>
            </header>

            {cart.length === 0 ? (
              <div className="cart-drawer__empty">
                <p>Your cart is empty. Add a piece from the collection to get started.</p>
              </div>
            ) : (
              <>
                <ul className="cart-drawer__items">
                  {cart.map((item) => (
                    <li key={item.id} className="cart-item">
                      <img src={item.image} alt={item.name} width="72" height="72" loading="lazy" />
                      <div className="cart-item__details">
                        <p className="cart-item__brand">{item.brand}</p>
                        <p className="cart-item__name">{item.name}</p>
                        <p className="cart-item__price">{formatPrice(item.price, item.currency)}</p>

                        <div className="cart-item__qty">
                          <button
                            type="button"
                            onClick={() => decrementItem(item.id)}
                            aria-label={`Decrease quantity of ${item.name}`}
                          >
                            <FiMinus />
                          </button>
                          <span aria-live="polite">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => incrementItem(item.id)}
                            aria-label={`Increase quantity of ${item.name}`}
                          >
                            <FiPlus />
                          </button>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="cart-item__remove"
                        onClick={() => removeFromCart(item.id)}
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        <FiTrash2 />
                      </button>
                    </li>
                  ))}
                </ul>

                <footer className="cart-drawer__footer">
                  <div className="cart-drawer__subtotal">
                    <span>Subtotal</span>
                    <span>{formatPrice(totalPrice)}</span>
                  </div>
                  <button type="button" className="btn btn--primary cart-drawer__checkout" onClick={onCheckout}>
                    Proceed to checkout
                  </button>
                </footer>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
