import PageHero from '../components/PageHero'
import { Icon } from '../components/Icons'
import { Reveal } from '../hooks/useInView'
import { services } from '../data/content'

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Usluge"
        title="Prateće usluge"
        description="Pored prodaje, nudimo transport, skladištenje i industrijsku obradu materijala."
      />

      <section className="section">
        <div className="container">
          <div className="services-page__grid">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <article className="why-card">
                  <Icon name={s.icon} />
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
