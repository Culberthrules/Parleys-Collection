import { motion, useReducedMotion } from 'framer-motion';
import '../styles/hero.scss';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="hero" id="home" aria-label="Introduction">
      <div className="hero__dial" aria-hidden="true">
        <svg viewBox="0 0 400 400" className="hero__dial-svg">
          <circle cx="200" cy="200" r="190" className="hero__dial-ring" />
          <circle cx="200" cy="200" r="160" className="hero__dial-ring hero__dial-ring--inner" />
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={i}
              x1="200"
              y1="26"
              x2="200"
              y2="46"
              className="hero__dial-tick"
              transform={`rotate(${i * 30} 200 200)`}
            />
          ))}
          <motion.line
            x1="200"
            y1="200"
            x2="200"
            y2="70"
            className="hero__dial-hand hero__dial-hand--minute"
            animate={shouldReduceMotion ? {} : { rotate: 360 }}
            transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
            style={{ originX: '200px', originY: '200px' }}
          />
          <motion.line
            x1="200"
            y1="200"
            x2="200"
            y2="110"
            className="hero__dial-hand hero__dial-hand--hour"
            animate={shouldReduceMotion ? {} : { rotate: 360 }}
            transition={{ repeat: Infinity, duration: 720, ease: 'linear' }}
            style={{ originX: '200px', originY: '200px' }}
          />
          <circle cx="200" cy="200" r="6" className="hero__dial-pin" />
        </svg>
      </div>

      <motion.div
        className="hero__content"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <p className="eyebrow">Est. dealer of classic timepieces</p>
        <h1 className="hero__headline">
          Time, kept by <span>those who know</span> it.
        </h1>
        <p className="hero__subhead">
          A curated selection of classic wristwatches — from field-ready Casio
          and G-Shock to Cartier, Hublot, Audemars Piguet, Bvlgari and Tomi.
          Every piece authenticated before it reaches you.
        </p>
        <div className="hero__actions">
          <a href="#products" className="btn btn--primary">
            Shop the collection
          </a>
          <a href="#features" className="btn btn--ghost">
            Why collectors trust us
          </a>
        </div>
      </motion.div>
    </section>
  );
}
