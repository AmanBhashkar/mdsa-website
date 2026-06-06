import { CTA_SECTION } from '../data/content'
import './CTA.css'

export default function CTA() {
  return (
    <section id="contact" className="cta" aria-labelledby="cta-heading">
      <div className="cta__inner container">
        <h2 id="cta-heading" className="cta__heading">{CTA_SECTION.heading}</h2>
        <p className="cta__body">{CTA_SECTION.body}</p>
        <a href={CTA_SECTION.button.href} className="btn btn--accent cta__btn">
          {CTA_SECTION.button.label}
        </a>
      </div>
    </section>
  )
}
