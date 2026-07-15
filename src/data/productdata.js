// Central product catalog. In a real deployment this would be fetched from
// a CMS or commerce API — kept as a static module here so the storefront
// works out of the box, and so it's obvious where to wire up a fetch call.

import {
    buildProductsFromImageGlob,
    buildProductsFromPublicImages,
    mergeProductCatalog,
} from '../utils/productHelpers';
import publicImageFiles from 'virtual:public-images';
import { productOverrides } from './imageProductCatalog';

export const BRANDS = [
    'All',
    'Poedagar',
    'Casio',
    'Cartier',
    'Emporio Armani',
    'Tomi',
    'Forsining',
    'Patek Philippe',
];

/** Extra public filenames (public/images/ is auto-scanned by the Vite plugin). */
export const PUBLIC_IMAGE_FILES = [];

// --- Catalog assembly -------------------------------------------------------
// 1. Bundled images from src/assets/images/ (automatic via Vite glob)
// 2. Public images from public/images/ with names/prices in imageProductCatalog.js

const imageGlobProducts = buildProductsFromImageGlob(productOverrides);

// Filter out the duplicate "0b60c920-...(1).JPG" — it is byte-for-byte identical
// to "0b60c920-...JPG" and would generate an invalid URL slug with parentheses.
const EXCLUDED_FILES = ['0b60c920-07ab-4ce2-bd0a-c7ac56a60f25(1).JPG'];

const publicImageProducts = buildProductsFromPublicImages(
    [...publicImageFiles, ...PUBLIC_IMAGE_FILES].filter(
        (f) => !EXCLUDED_FILES.includes(f),
    ),
    productOverrides,
);

/**
 * Slugs of products added on 2026-07-14 — shown with a "New Arrival" badge.
 * Remove a slug from here once the product is no longer considered "new".
 * @type {Set<string>}
 */
export const NEW_ARRIVAL_SLUGS = new Set([
    '0b60c920-07ab-4ce2-bd0a-c7ac56a60f25',
    '120c7300-5890-4743-9118-5e90330cd95c',
    '17304791-8bca-48f4-b136-d164ded5a52a',
    '1e1e92cc-2ed9-4198-a363-9e73a4c54ad0',
    '2c5433e6-a71d-46a1-bca8-a1ef229a7543',
    '3432a84a-96b5-4efb-bd2b-c7e948aa2e30',
    '44ef5463-d019-4895-9b1e-1b1160d8abd3',
    '49035e1b-9b08-4354-be1d-3ff7d218c021',
    '5191ca3a-04fd-4bab-b497-6993a904b659',
    '5b03f614-5354-45b3-ad5d-868a5346e457',
    '5c509019-c58a-4262-b14e-16731afce506',
    '6078f7a9-7085-4736-ad79-f33f31e59b8b',
    '71a7783c-f075-436a-a0a0-4c415f77af2b',
    '9ea4e2b6-eab2-44e0-8393-dd941cc985ff',
    'a55815c8-14c0-49f9-8cc7-a1f1b73ee3bf',
    'ae4333ca-f778-4040-985e-6fbf1a52d57f',
    'b4e0cb13-dbb4-4d1b-9ad7-0da0f2c64d06',
    'b626cc54-e681-4952-90cc-6c18d36866e8',
    'c42a7092-68cb-480b-82ea-27a2f1f9d21e',
    'c4ae2aff-bdc4-487c-9bb1-a9b30227db42',
    'cd203c0a-7cda-444b-9a46-8a9ba2d3ccb8',
    'd09db03b-f4d2-4e29-9195-ddaf48f8ff69',
    'da93ba6e-36e2-4488-aeb2-85e4d7d785bb',
    'img_3750',
    'img_3751',
]);

/** Full catalog used by /products and /products/:slug */
const rawCatalog = mergeProductCatalog([], [
    ...imageGlobProducts,
    ...publicImageProducts,
]);

/** Full catalog with isNew flags applied */
export const products = rawCatalog.map((p) =>
    NEW_ARRIVAL_SLUGS.has(p.slug) ? { ...p, isNew: true } : p,
);

export function formatPrice(amount, currency = 'NGN') {
    return new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency,
        maximumFractionDigits: 0,
    }).format(amount);
}

/** @param {string} slug */
export function getProductBySlug(slug) {
    return products.find((product) => product.slug === slug) ?? null;
}

/** @param {string} id */
export function getProductById(id) {
    return products.find((product) => product.id === id) ?? null;
}
