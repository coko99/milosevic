import PageHero from '../components/PageHero'
import { Reveal } from '../hooks/useInView'
import { inspiration } from '../data/content'

export default function InspirationPage() {
  const [featured, ...rest] = inspiration

  return (
    <>
      <PageHero
        eyebrow="Inspiracija"
        title="Detalji koji menjaju prostor"
        description="Pronađite stil koji odgovara vašem prostoru — naš tim vam pomaže pri izboru."
      />

      <section className="section inspiration">
        <div className="container">
          <Reveal>
            <div className="inspiration__featured">
              <img src={featured.image} alt={featured.title} className="media-16-9" loading="eager" />
              <div className="inspiration__overlay">
                <h3>{featured.title}</h3>
                {featured.description && <p>{featured.description}</p>}
              </div>
            </div>
          </Reveal>

          <div className="inspiration__gallery">
            {rest.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 80}>
                <div className="inspiration__card">
                  <img src={item.image} alt={item.title} className="media-16-9" loading="lazy" />
                  <div className="inspiration__overlay inspiration__overlay--sm">
                    <h3>{item.title}</h3>
                    {item.description && <p>{item.description}</p>}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
