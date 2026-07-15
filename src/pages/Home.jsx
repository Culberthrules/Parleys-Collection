import { Helmet } from 'react-helmet-async';
import { BRAND_NAME } from '../constants/brand';
import Hero from '../components/hero';
import Features from '../components/features';
import Products from '../components/products';

export default function Home() {
    return (
        <>
            <Helmet>
                <title>{BRAND_NAME} | Curated Classic Wristwatches</title>
                <meta
                    name="description"
                    content="Shop authenticated classic wristwatches from Casio, G-Shock, Cartier, Hublot, Audemars Piguet, Emporio Armani, Bvlgari and Tomi."
                />
            </Helmet>
            <Hero />
            <Features />
            <Products />
        </>
    );
}
