import { FiShield, FiTruck, FiRefreshCw, FiHeadphones } from 'react-icons/fi';
import { motion } from 'framer-motion';
import '../styles/features.scss';

const FEATURES = [
  {
    icon: FiShield,
    title: 'Authenticated on arrival',
    description:
      'Every watch is inspected and verified against manufacturer records before it ships.',
  },
  {
    icon: FiTruck,
    title: 'Insured worldwide delivery',
    description:
      'Tracked, signature-required shipping with full insurance on every order.',
  },
  {
    icon: FiRefreshCw,
    title: '14-day return window',
    description:
      'Not the right fit? Send it back within two weeks for a full refund.',
  },
  {
    icon: FiHeadphones,
    title: 'A concierge, not a call center',
    description:
      'Reach a real specialist over WhatsApp for sizing, sourcing, or servicing questions.',
  },
];

export default function Features() {
  return (
    <section className="features section" id="features" aria-label="Why collectors trust us">
      <div className="features__container">
        <div className="features__intro">
          <p className="eyebrow">Why collectors trust us</p>
          <h2 className="features__heading">Built for people who keep watches for decades.</h2>
        </div>

        <div className="features__grid">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="feature-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <feature.icon className="feature-card__icon" aria-hidden="true" />
              <h3 className="feature-card__title">{feature.title}</h3>
              <p className="feature-card__desc">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
