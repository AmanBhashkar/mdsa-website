import type { IconName } from './Icons'
import { Icon } from './Icons'
import { SERVICES } from '../data/content'
import './Services.css'

export default function Services() {
  return (
    <section id="services" className="services" aria-labelledby="services-heading">
      <div className="container">
        <h2 id="services-heading" className="section-heading">{SERVICES.heading}</h2>

        <ul className="services__grid">
          {SERVICES.items.map(item => (
            <li key={item.id} className="service-card">
              <div className="service-card__header">
                <h3 className="service-card__title">{item.title}</h3>
                <Icon name={item.icon as IconName} className="service-card__icon" />
              </div>
              <p className="service-card__body">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
