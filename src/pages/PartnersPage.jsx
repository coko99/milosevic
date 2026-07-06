import PageHero from '../components/PageHero'
import { Reveal } from '../hooks/useInView'
import { partners, partnersIntro } from '../data/content'

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partneri"
        title="Naši partneri"
        description={partnersIntro}
      />

      <section className="section partners-page">
        <div className="container">
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <Reveal key={partner.id} delay={(index % 8) * 40}>
                <div className="partner-circle">
                  <img
                    src={partner.logo}
                    alt={`Partner ${partner.id}`}
                    loading="lazy"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
