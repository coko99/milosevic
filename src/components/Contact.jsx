import { useState } from 'react'
import { contact } from '../data/content'
import { Icon } from './Icons'
import { Reveal } from '../hooks/useInView'

export default function Contact({ embedded = false }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Upit od ${form.name}`)
    const body = encodeURIComponent(
      `Ime: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    )
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
  }

  return (
    <section className={`section contact ${embedded ? 'contact--embedded' : ''}`}>
      <div className="container">
        {!embedded && (
          <Reveal className="section__header section__header--center">
            <span className="eyebrow">Kontakt</span>
            <h2>Posetite naš salon</h2>
          </Reveal>
        )}

        <div className="contact__grid">
          <Reveal className="contact__info">
            <div className="contact__card">
              <h3>{contact.company}</h3>
              <p className="contact__tagline">{contact.tagline}</p>

              <ul className="contact__details">
                <li>
                  <Icon name="location" className="icon-circle--sm" />
                  <div>
                    <strong>Adresa</strong>
                    <span>{contact.address}</span>
                  </div>
                </li>
                <li>
                  <Icon name="phone" className="icon-circle--sm" />
                  <div>
                    <strong>Telefon</strong>
                    {contact.phones.map((p) => (
                      <a key={p} href={`tel:${p.replace(/\s/g, '')}`}>{p}</a>
                    ))}
                  </div>
                </li>
                <li>
                  <Icon name="mail" className="icon-circle--sm" />
                  <div>
                    <strong>Email</strong>
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </div>
                </li>
                <li>
                  <Icon name="clock" className="icon-circle--sm" />
                  <div>
                    <strong>Radno vreme</strong>
                    <span>{contact.hours}</span>
                  </div>
                </li>
              </ul>

              <div className="contact__quick">
                <a href={`tel:${contact.phones[0].replace(/\s/g, '')}`} className="btn btn--primary">
                  Pozovite nas
                </a>
                <a href={`mailto:${contact.email}`} className="btn btn--secondary">
                  Pošaljite email
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal className="contact__form-wrap" delay={120}>
            <form className="contact__form" onSubmit={handleSubmit}>
              <h3>Pošaljite upit</h3>
              <div className="form-group">
                <label htmlFor="name">Ime i prezime</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Poruka</label>
                <textarea
                  id="message"
                  rows="5"
                  required
                  placeholder="Opišite šta tražite..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <button type="submit" className="btn btn--primary btn--full">
                Pošalji upit
              </button>
            </form>
          </Reveal>
        </div>

        <Reveal className="contact__map" delay={200}>
          <iframe
            title="Lokacija Milošević DOO"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2930.5!2d21.333!3d43.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4755b0e8c8c8c8c9%3A0x0!2z0J_QsNC30LDRgtC-0YHRgtGM!5e0!3m2!1ssr!2srs!4v1"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  )
}
