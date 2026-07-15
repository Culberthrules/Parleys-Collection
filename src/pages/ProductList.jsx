import { Helmet } from 'react-helmet-async';
import { BRAND_NAME } from '../constants/brand';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products, formatPrice } from '../data/productdata';
import '../styles/product-list-page.scss';

/**
 * Full product listing at /products — responsive grid with cards linking to detail pages.
 */
export default function ProductList() {
    return (
        <>
            <Helmet>
                <title>Shop | {BRAND_NAME}</title>
                <meta
                    name="description"
                    content={`Browse the full ${BRAND_NAME} — curated classic wristwatches and more.`}
                />
            </Helmet>

            <section className="shop section" aria-label="Product catalog">
                <div className="shop__container">
                    <header className="shop__header">
                        <p className="eyebrow">Shop all</p>
                        <h1 className="shop__title">The collection</h1>
                        <p className="shop__subtitle">
                            {products.length} piece{products.length === 1 ? '' : 's'} available.
                        </p>
                    </header>

                    <div className="shop__grid">
                        {products.map((product, index) => (
                            <motion.article
                                key={product.id}
                                className="shop-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                            >
                                <Link
                                    to={`/products/${product.slug}`}
                                    className="shop-card__media"
                                    aria-label={`View ${product.name}`}
                                >
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        loading="lazy"
                                        width="600"
                                        height="600"
                                    />
                                    {product.isNew && (
                                        <span className="shop-card__badge" aria-label="New arrival">New</span>
                                    )}
                                </Link>

                                <div className="shop-card__body">
                                    {product.brand && (
                                        <p className="shop-card__brand">{product.brand}</p>
                                    )}
                                    <h2 className="shop-card__name">
                                        <Link to={`/products/${product.slug}`}>{product.name}</Link>
                                    </h2>
                                    <p className="shop-card__desc">{product.description}</p>

                                    <div className="shop-card__footer">
                                        <span className="shop-card__price">
                                            {formatPrice(product.price, product.currency)}
                                        </span>
                                        <Link
                                            to={`/products/${product.slug}`}
                                            className="btn btn--ghost shop-card__cta"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
