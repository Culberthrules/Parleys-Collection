import { Helmet } from 'react-helmet-async';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { formatPrice, getProductBySlug } from '../data/productdata';
import { BRAND_NAME } from '../constants/brand';
import { useCart } from '../context/cardcontext';
import '../styles/product-detail.scss';

/**
 * Single product view at /products/:slug
 */
export default function ProductDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const product = getProductBySlug(slug ?? '');

    if (!product) {
        return (
            <section className="product-detail section">
                <div className="product-detail__container product-detail__container--narrow">
                    <h1>Product not found</h1>
                    <p className="product-detail__missing">
                        We couldn&apos;t find a product matching &ldquo;{slug}&rdquo;.
                    </p>
                    <Link to="/products" className="btn btn--primary">
                        Back to products
                    </Link>
                </div>
            </section>
        );
    }

    const detailCopy = product.longDescription ?? product.description;

    return (
        <>
            <Helmet>
                <title>{product.name} | {BRAND_NAME}</title>
                <meta name="description" content={product.description} />
            </Helmet>

            <section className="product-detail section" aria-label={product.name}>
                <div className="product-detail__container">
                    <button
                        type="button"
                        className="product-detail__back"
                        onClick={() => navigate('/products')}
                    >
                        <FiArrowLeft aria-hidden="true" />
                        Back to products
                    </button>

                    <div className="product-detail__layout">
                        <div className="product-detail__media">
                            <img
                                src={product.image}
                                alt={product.name}
                                loading="lazy"
                                decoding="async"
                                width="800"
                                height="800"
                            />
                        </div>

                        <div className="product-detail__info">
                            {product.isNew && (
                                <span className="product-detail__new-badge">New Arrival</span>
                            )}
                            {product.brand && (
                                <p className="product-detail__brand">{product.brand}</p>
                            )}
                            <h1 className="product-detail__title">{product.name}</h1>
                            <p className="product-detail__price">
                                {formatPrice(product.price, product.currency)}
                            </p>
                            <p className="product-detail__description">{detailCopy}</p>

                            <div className="product-detail__actions">
                                <button
                                    type="button"
                                    className="btn btn--primary product-detail__add"
                                    onClick={() => addToCart(product)}
                                >
                                    Add to Cart
                                </button>
                                <Link to="/products" className="btn btn--ghost">
                                    Continue shopping
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
