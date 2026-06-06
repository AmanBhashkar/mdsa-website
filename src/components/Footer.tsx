import { BrandIcon } from './Icons'
import { FOOTER } from '../data/content'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <a href="#" className="footer__logo">
            <BrandIcon className="footer__logo-icon" />
            <span className="footer__logo-text">
              <strong>{FOOTER.brand.short}</strong>{FOOTER.brand.long}
            </span>
          </a>
          <p className="footer__tagline">{FOOTER.tagline}</p>
        </div>

        {FOOTER.columns.map(col => (
          <div key={col.heading} className="footer__col">
            <h3 className="footer__col-heading">{col.heading}</h3>
            <ul className="footer__col-links">
              {col.links.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="footer__link">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer__bottom container">
        <p className="footer__copy">{FOOTER.copyright}</p>
      </div>
    </footer>
  )
}
