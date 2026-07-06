import HeroSlider from './HeroSlider'
import BlurBanner from './BlurBanner'
import WhyUs from './WhyUs'
import { PageTeaser } from './PageHero'
import { Reveal } from '../hooks/useInView'

export default function Hero() {
  return (
    <>
      <HeroSlider />

      <BlurBanner />

      <WhyUs compact />

      <section className="section home-teasers">
        <div className="container home-teasers__grid">
          <Reveal>
            <PageTeaser
              title="Naša ponuda"
              text="Keramika, sanitarije, nameštaj i oprema za kupatilo — sve na jednom mestu."
              to="/ponuda"
              label="Pogledaj kategorije"
            />
          </Reveal>
          <Reveal delay={100}>
            <PageTeaser
              title="Usluge"
              text="Transport, skladištenje, obrada gvožđa i CNC sečenje metala."
              to="/usluge"
              label="Saznaj više"
            />
          </Reveal>
          <Reveal delay={200}>
            <PageTeaser
              title="Inspiracija"
              text="Pogledajte enterijere i stilove koji mogu inspirisati vaš prostor."
              to="/inspiracija"
              label="Galerija"
            />
          </Reveal>
        </div>
      </section>
    </>
  )
}
