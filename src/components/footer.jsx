import { BRAND_NAME } from '../constants/brand';
import '../styles/footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__logo">{BRAND_NAME}</p>
        <p className="footer__copy">
          &copy; {new Date().getFullYear()} {BRAND_NAME}. All pieces sold subject to authentication terms.
        </p>
      </div>
    </footer>
  );
}
