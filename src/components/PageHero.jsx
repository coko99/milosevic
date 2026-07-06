import { Link } from 'react-router-dom'

export default function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="page-hero">
      <div className="page-hero__glow page-hero__glow--neon" />
      <div className="container page-hero__inner">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {description && <p className="page-hero__desc">{description}</p>}
        {children}
      </div>
    </section>
  )
}

export function PageTeaser({ title, text, to, label }) {
  return (
    <article className="page-teaser">
      <h3>{title}</h3>
      <p>{text}</p>
      <Link to={to} className="premium-card__link">
        {label}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </Link>
    </article>
  )
}
