import type { IconName } from './Icons'
import { Icon } from './Icons'
import { WHY_CHOOSE_US } from '../data/content'
import './WhyChooseUs.css'

export default function WhyChooseUs() {
  return (
    <section className="why" aria-labelledby="why-heading">
      <div className="container">
        <h2 id="why-heading" className="section-heading">{WHY_CHOOSE_US.heading}</h2>

        <ul className="why__grid">
          {WHY_CHOOSE_US.items.map(item => (
            <li key={item.title} className="why-card">
              <div className="why-card__icon-box" aria-hidden="true">
                <Icon name={item.icon as IconName} className="why-card__icon" />
              </div>
              <h3 className="why-card__title">{item.title}</h3>
              <p className="why-card__body">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
