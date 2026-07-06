import PageHero from '../components/PageHero'
import { Reveal } from '../hooks/useInView'
import { categories } from '../data/content'

export default function OfferPage() {
  return (
    <>
      <PageHero
        eyebrow="Ponuda"
        title="Sve za vaše kupatilo i enterijer"
        description="Informativni pregled kategorija proizvoda koje možete pronaći u našem salonu."
      />

      <section className="section categories">
        <div className="container">
          <div className="categories__grid">
            {categories.map((cat, i) => (
              <Reveal key={cat.title} delay={i * 80}>
                <article className="premium-card premium-card--info">
                  <div className="premium-card__image">
                    <img src={cat.image} alt={cat.title} className="media-16-9" loading="lazy" />
                  </div>
                  <div className="premium-card__body">
                    <h3>{cat.title}</h3>
                    <p>{cat.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
