import { contact } from '../data/content'

const icons = {
  Instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  Facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.2-1.5 1.5-1.5H16.7V5c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V11H7.8v3h2.2v8h3.5z" />
    </svg>
  ),
}

export default function SocialLinks({ className = '' }) {
  if (!contact.social?.length) return null

  return (
    <div className={`social-links ${className}`.trim()}>
      {contact.social.map((item) => (
        <a
          key={item.name}
          href={item.url}
          className="social-links__btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          title={item.label}
        >
          {icons[item.name]}
        </a>
      ))}
    </div>
  )
}
