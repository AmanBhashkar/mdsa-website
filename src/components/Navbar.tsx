import { BrandIcon } from './Icons'
import { NAV } from '../data/content'
import './Navbar.css'

export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar__inner container" aria-label="Main navigation">
        <a href="#" className="navbar__brand">
          <BrandIcon className="navbar__brand-icon" />
          <span className="navbar__brand-text">
            <strong>{NAV.brand.short}</strong>{NAV.brand.long}
          </span>
        </a>

        <ul className="navbar__links">
          {NAV.links.map(link => (
            <li key={link.label}>
              <a href={link.href} className="navbar__link">{link.label}</a>
            </li>
          ))}
        </ul>

        <a href={NAV.cta.href} className="btn btn--primary navbar__cta">
          {NAV.cta.label}
        </a>
      </nav>
    </header>
  )
}
