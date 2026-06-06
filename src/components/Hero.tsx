import { HERO } from '../data/content'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <div className="hero__inner container">
        <div className="hero__content">
          <h1 className="hero__headline">{HERO.headline}</h1>
          <p className="hero__body">{HERO.body}</p>
          <div className="hero__actions">
            <a href={HERO.primaryCta.href} className="btn btn--accent">
              {HERO.primaryCta.label}
            </a>
            <a href={HERO.secondaryCta.href} className="btn btn--outline-white">
              {HERO.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
