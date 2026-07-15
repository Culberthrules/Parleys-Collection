import { useMemo, useState } from 'react';
import { products, BRANDS } from '../data/productdata';
import ProductCard from './productcard';
import '../styles/products.scss';

const FILTER_NEW = '✦ New Arrivals';
const ALL_FILTERS = [FILTER_NEW, ...BRANDS];

export default function Products() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProducts = useMemo(() => {
    if (activeFilter === FILTER_NEW) return products.filter((p) => p.isNew);
    if (activeFilter === 'All') return products;
    return products.filter((product) => product.brand === activeFilter);
  }, [activeFilter]);

  return (
    <section className="products section" id="products" aria-label="Shop the collection">
      <div className="products__container">
        <div className="products__intro">
          <p className="eyebrow">The collection</p>
          <h2 className="products__heading">Eight brands. One standard.</h2>
        </div>

        <div className="products__filters" role="tablist" aria-label="Filter by brand">
          {ALL_FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter}
              className={`products__filter ${activeFilter === filter ? 'products__filter--active' : ''} ${filter === FILTER_NEW ? 'products__filter--new' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {filteredProducts.length > 0 ? (
          <div className="products__grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="products__empty">No pieces from this brand right now — check back soon.</p>
        )}
      </div>
    </section>
  );
}

