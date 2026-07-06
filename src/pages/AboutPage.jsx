import PageHero from '../components/PageHero'
import { Reveal } from '../hooks/useInView'
import { aboutContent } from '../data/content'

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="O nama"
        title="Salon keramike sa tradicijom"
        description="Milošević DOO — pouzdan partner za keramiku, sanitarije i enterijer u Kruševcu."
      />

      <section className="section">
        <div className="container about-page__grid">
          <Reveal className="about__visual">
            <div className="about__image-wrap">
              <img
                src={aboutContent.image}
                alt="Salon keramike Milošević"
                className="media-16-9"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal className="about__content" delay={120}>
            <p>{aboutContent.intro}</p>
            <p>{aboutContent.history}</p>
            <div className="about__certs">
              {aboutContent.certificates.map((cert) => (
                <span key={cert} className="cert-badge">{cert}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section about-expertise">
        <div className="container about-expertise__grid">
          <Reveal className="about-expertise__content">
            <span className="eyebrow">{aboutContent.expertise.eyebrow}</span>
            <h2>{aboutContent.expertise.title}</h2>
            <p>{aboutContent.expertise.text}</p>
            <ul className="about-expertise__points">
              {aboutContent.expertise.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="about-expertise__visual" delay={120}>
            <div className="about-expertise__image">
              <img
                src={aboutContent.expertise.image}
                alt="Savetnica u salonu Milošević DOO prikazuje keramičke uzorke"
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section facilities-info">
        <div className="container">
          <Reveal className="section__header section__header--center">
            <span className="eyebrow">Objekti</span>
            <h2>Naša infrastruktura</h2>
          </Reveal>
          <div className="facilities-info__grid">
            {aboutContent.facilities.map((f, i) => (
              <Reveal key={f.title} delay={i * 100}>
                <article className="info-card">
                  <span className="info-card__area">{f.area}</span>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
