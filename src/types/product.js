/**
 * @typedef {Object} Product
 * @property {string} id        - Unique identifier (usually matches slug)
 * @property {string} slug      - URL-safe slug used in /products/:slug
 * @property {string} name      - Display name
 * @property {string} image       - Image URL (public path or bundled import)
 * @property {number} price
 * @property {string} [currency='NGN']
 * @property {string} [brand]   - Optional brand label
 * @property {string} description       - Short blurb for cards
 * @property {string} [longDescription] - Extended copy for the detail page
 * @property {boolean} [isNew]  - Marks the product as a new arrival (badge)
 */

export {};
