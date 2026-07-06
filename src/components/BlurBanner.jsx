import { Link } from 'react-router-dom'
import { blurBanner } from '../data/content'
import { Reveal } from '../hooks/useInView'

export default function BlurBanner() {
  return (
    <section className="image-banner">
      <div className="container">
        <div className="image-banner__layout">
          <Reveal className="image-banner__media">
            <div className="image-banner__frame">
              <img src={blurBanner.image} alt="" className="media-16-9" loading="lazy" />
            </div>
          </Reveal>

          <Reveal className="image-banner__panel" delay={120}>
            <span className="eyebrow">{blurBanner.eyebrow}</span>
            <h2>{blurBanner.title}</h2>
            <p>{blurBanner.text}</p>
            <Link to={blurBanner.cta.to} className="btn btn--primary btn--lg">
              {blurBanner.cta.label}
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
