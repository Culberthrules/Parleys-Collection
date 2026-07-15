import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { formatPrice } from '../data/productdata';
import { useCart } from '../context/cardcontext';
import '../styles/productcard.scss';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <motion.article
      className="product-card"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45 }}
    >
      <Link to={`/products/${product.slug}`} className="product-card__media">
        <img src={product.image} alt={product.name} loading="lazy" width="600" height="600" />
        {product.isNew && (
          <span className="product-card__badge" aria-label="New arrival">New</span>
        )}
      </Link>

      <div className="product-card__body">
        <p className="product-card__brand">{product.brand}</p>
        <h3 className="product-card__name">
          <Link to={`/products/${product.slug}`}>{product.name}</Link>
        </h3>
        <p className="product-card__desc">{product.description}</p>

        <div className="product-card__footer">
          <span className="product-card__price">{formatPrice(product.price, product.currency)}</span>
          <button
            type="button"
            className="btn btn--primary product-card__add"
            onClick={() => addToCart(product)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </motion.article>
  );
}
