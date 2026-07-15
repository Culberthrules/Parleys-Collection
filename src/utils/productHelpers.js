/** @typedef {import('../types/product.js').Product} Product */

const DEFAULT_PRICE = 35000;
const DEFAULT_CURRENCY = 'NGN';

/**
 * Turn `wireless-headphones.jpg` → `Wireless Headphones`
 * @param {string} filename
 */
export function filenameToName(filename) {
    const base = filename.replace(/\.[^.]+$/i, '');
    return base
        .replace(/[-_]+/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase());
}

/**
 * Turn `wireless-headphones.jpg` → `wireless-headphones`
 * @param {string} filename
 */
export function filenameToSlug(filename) {
    return filename.replace(/\.[^.]+$/i, '').toLowerCase();
}

/**
 * Default short description for image-only catalog entries.
 * Override per product in `productOverrides` inside productdata.js.
 * @param {string} name
 */
export function defaultShortDescription(name) {
    return `Premium ${name.toLowerCase()} — crafted for everyday use with timeless design.`;
}

/**
 * Default long description for the product detail page.
 * @param {string} name
 */
export function defaultLongDescription(name) {
    return [
        `The ${name} combines thoughtful design with reliable quality.`,
        'Each piece is selected for durability, comfort, and a clean aesthetic that works across seasons.',
        'Ships with care packaging. Contact us for sizing, specs, or bulk orders.',
    ].join(' ');
}

/**
 * Build Product objects from Vite's import.meta.glob over src/assets/images/.
 * Drop a new image into that folder and it appears in the catalog automatically.
 *
 * Optional overrides: pass `{ [slug]: { price, description, ... } }` to customize.
 *
 * @param {Record<string, Record<string, unknown>>} [overrides]
 * @returns {Product[]}
 */
export function buildProductsFromImageGlob(overrides = {}) {
    /** @type {Record<string, string>} */
    const modules = import.meta.glob('../assets/images/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
        eager: true,
        query: '?url',
        import: 'default',
    });

    return Object.entries(modules).map(([path, url]) => {
        const filename = path.split('/').pop() ?? path;
        const slug = filenameToSlug(filename);
        const name = filenameToName(filename);
        const custom = overrides[slug] ?? {};

        return {
            id: slug,
            slug,
            name: /** @type {string} */ (custom.name ?? name),
            image: /** @type {string} */ (custom.image ?? url),
            price: /** @type {number} */ (custom.price ?? DEFAULT_PRICE),
            currency: /** @type {string} */ (custom.currency ?? DEFAULT_CURRENCY),
            brand: /** @type {string | undefined} */ (custom.brand),
            description: /** @type {string} */ (
                custom.description ?? defaultShortDescription(name)
            ),
            longDescription: /** @type {string} */ (
                custom.longDescription ?? defaultLongDescription(name)
            ),
            isNew: /** @type {boolean | undefined} */ (custom.isNew),
        };
    });
}

/**
 * Build products from filenames served via public/images/ (no bundling).
 * Add the filename to PUBLIC_IMAGE_FILES in productdata.js when you drop a new file.
 *
 * @param {string[]} filenames e.g. ['wireless-headphones.jpg']
 * @param {Record<string, Record<string, unknown>>} [overrides]
 * @returns {Product[]}
 */
export function buildProductsFromPublicImages(filenames, overrides = {}) {
    return filenames.map((filename) => {
        const slug = filenameToSlug(filename);
        const name = filenameToName(filename);
        const custom = overrides[slug] ?? {};

        return {
            id: slug,
            slug,
            name: /** @type {string} */ (custom.name ?? name),
            image: /** @type {string} */ (custom.image ?? `/images/${filename}`),
            price: /** @type {number} */ (custom.price ?? DEFAULT_PRICE),
            currency: /** @type {string} */ (custom.currency ?? DEFAULT_CURRENCY),
            brand: /** @type {string | undefined} */ (custom.brand),
            description: /** @type {string} */ (
                custom.description ?? defaultShortDescription(name)
            ),
            longDescription: /** @type {string} */ (
                custom.longDescription ?? defaultLongDescription(name)
            ),
            isNew: /** @type {boolean | undefined} */ (custom.isNew),
        };
    });
}

/**
 * Merge static catalog entries with auto-discovered image products.
 * Static entries win when slugs collide.
 *
 * @param {Product[]} staticProducts
 * @param {Product[]} imageProducts
 * @returns {Product[]}
 */
export function mergeProductCatalog(staticProducts, imageProducts) {
    const bySlug = new Map();

    for (const product of imageProducts) {
        bySlug.set(product.slug, product);
    }
    for (const product of staticProducts) {
        bySlug.set(product.slug, product);
    }

    return Array.from(bySlug.values());
}
