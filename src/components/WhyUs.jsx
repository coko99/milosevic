import { Icon } from './Icons'
import { Reveal } from '../hooks/useInView'
import { whyUs } from '../data/content'

export default function WhyUs({ compact = false }) {
  const items = compact ? whyUs : whyUs

  return (
    <section className={`section why-us ${compact ? 'why-us--compact' : ''}`}>
      <div className="container">
        {!compact && (
          <Reveal className="section__header section__header--center">
            <span className="eyebrow">Zašto Milošević</span>
            <h2>Vaš pouzdan partner u enterijeru</h2>
          </Reveal>
        )}

        <div className={`why-us__grid ${compact ? 'why-us__grid--compact' : ''}`}>
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <article className="why-card">
                <Icon name={item.icon} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
