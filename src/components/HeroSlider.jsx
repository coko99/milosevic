import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { heroBenefits, heroSlides } from '../data/content'

const INTERVAL_MS = 4000
const FADE_MS = 900

export default function HeroSlider() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (heroSlides.length <= 1) return undefined

    const id = setInterval(() => {
      setActive((current) => (current + 1) % heroSlides.length)
    }, INTERVAL_MS)

    return () => clearInterval(id)
  }, [])

  return (
    <section className="hero hero--cinematic" aria-label="Uvodna sekcija">
      <div className="hero__bg" aria-hidden="true">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.src}
            className={`hero__bg-slide ${index === active ? 'hero__bg-slide--active' : ''}`}
            style={{ transitionDuration: `${FADE_MS}ms` }}
          >
            <img src={slide.src} alt="" />
          </div>
        ))}
      </div>

      <div className="hero__shade" aria-hidden="true" />

      <div className="container hero__content">
        <div className="hero__text-stack">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.src}
              className={`hero__text-slide ${index === active ? 'hero__text-slide--active' : ''}`}
              style={{ transitionDuration: `${FADE_MS}ms` }}
              aria-hidden={index !== active}
            >
              <span className="eyebrow">{slide.eyebrow}</span>
              <h1>
                {slide.title} <em>{slide.highlight}</em>
              </h1>
              <p className="hero__desc">{slide.description}</p>
            </div>
          ))}
        </div>

        <div className="hero__actions">
          <Link to="/ponuda" className="btn btn--primary btn--lg">
            Pogledaj ponudu
          </Link>
          <Link to="/kontakt" className="btn btn--secondary btn--lg">
            Kontaktiraj nas
          </Link>
        </div>

        <ul className="hero__benefits">
          {heroBenefits.map((b) => (
            <li key={b}>
              <span className="hero__dot" />
              {b}
            </li>
          ))}
        </ul>

        <div className="hero__slider-dots" role="tablist" aria-label="Izbor slajda">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-label={`Slajd ${index + 1}: ${slide.title} ${slide.highlight}`}
              className={`hero__slider-dot ${index === active ? 'hero__slider-dot--active' : ''}`}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
