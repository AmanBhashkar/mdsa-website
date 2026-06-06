import { STATS } from '../data/content'
import './Stats.css'

export default function Stats() {
  return (
    <section id="about" className="stats" aria-labelledby="stats-heading">
      <div className="stats__inner container">
        <div className="stats__text">
          <h2 id="stats-heading" className="stats__heading">{STATS.heading}</h2>
          <p className="stats__body">{STATS.body}</p>
        </div>

        <ul className="stats__items">
          {STATS.items.map(item => (
            <li key={item.label} className="stats__item">
              <span className="stats__value">{item.value}</span>
              <span className="stats__label">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
