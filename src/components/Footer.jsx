import { Link } from 'react-router-dom'
import { navLinks, contact } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img
            src="/logo-dark.png"
            alt="Milošević DOO"
            className="brand-logo brand-logo--footer"
            onError={(e) => { e.currentTarget.src = '/logo.svg' }}
          />
          <p>
            Salon keramike i opreme za kupatila. Keramika, sanitarije i
            enterijerska rešenja za prostor koji traje.
          </p>
        </div>

        <div className="footer__links">
          <h4>Navigacija</h4>
          <ul>
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__contact">
          <h4>Kontakt</h4>
          <p>{contact.address}</p>
          {contact.phones.map((p) => (
            <a key={p} href={`tel:${p.replace(/\s/g, '')}`}>{p}</a>
          ))}
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <p className="footer__hours">Radno vreme: {contact.hours}</p>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>&copy; {year} {contact.company} — Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  )
}
