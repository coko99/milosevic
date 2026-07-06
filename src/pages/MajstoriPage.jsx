import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { Icon } from '../components/Icons'
import { Reveal } from '../hooks/useInView'
import { majstoriCategories, majstoriIntro } from '../data/content'

export default function MajstoriPage() {
  return (
    <>
      <PageHero
        eyebrow={majstoriIntro.eyebrow}
        title={majstoriIntro.title}
        description={majstoriIntro.description}
      />

      <section className="section majstori-highlights">
        <div className="container">
          <Reveal className="majstori-highlights__grid">
            {majstoriIntro.highlights.map((item) => (
              <span key={item} className="majstori-highlight">
                {item}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section majstori-page">
        <div className="container">
          <Reveal className="section__header section__header--center">
            <span className="eyebrow">Kompletna ponuda</span>
            <h2>Od sitnih stvarčica do krupnog materijala</h2>
            <p>
              Pregled kategorija koje majstori, investitori i građevinske firme
              mogu pronaći kod nas — za kuću, zgradu, baštu i gradilište.
            </p>
          </Reveal>

          <div className="majstori__grid">
            {majstoriCategories.map((category, index) => (
              <Reveal key={category.title} delay={(index % 3) * 60}>
                <article className="majstori-card">
                  <div className="majstori-card__head">
                    <Icon name={category.icon} />
                    <div>
                      <h3>{category.title}</h3>
                      <p>{category.description}</p>
                    </div>
                  </div>
                  <ul className="majstori-card__items">
                    {category.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section majstori-cta">
        <div className="container">
          <Reveal className="majstori-cta__panel">
            <div>
              <span className="eyebrow">Potrebna ponuda?</span>
              <h2>Dođite u salon ili nas kontaktirajte</h2>
              <p>
                Za tačne cene, dostupnost i veleprodajne uslove — naš tim je tu
                da pomogne majstorima i firmama pri nabavci materijala.
              </p>
            </div>
            <div className="majstori-cta__actions">
              <Link to="/kontakt" className="btn btn--primary btn--lg">
                Kontaktirajte nas
              </Link>
              <Link to="/usluge" className="btn btn--secondary btn--lg">
                Pogledaj usluge
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
