import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../data/content'

const LOGO = '/logo-dark.png'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 960px)')
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''} ${menuOpen ? 'header--menu-open' : ''}`}>
      <div className="container header__inner">
        <Link to="/" className="header__logo" aria-label="Milošević DOO" onClick={close}>
          <img
            src={LOGO}
            alt="Milošević DOO"
            className="brand-logo"
            onError={(e) => { e.currentTarget.src = '/logo.svg' }}
          />
        </Link>

        <nav
          className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}
          aria-hidden={isMobile && !menuOpen}
        >
          <p className="header__nav-label">Navigacija</p>
          <ul>
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} onClick={close} className={({ isActive }) => isActive ? 'active' : ''}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/kontakt" className="btn btn--primary header__cta" onClick={close}>
            Pošalji upit
          </Link>
        </nav>

        <button
          type="button"
          className={`header__toggle ${menuOpen ? 'header__toggle--open' : ''}`}
          aria-label={menuOpen ? 'Zatvori meni' : 'Otvori meni'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span /><span />
        </button>
      </div>

      <div
        className={`header__backdrop ${menuOpen ? 'header__backdrop--open' : ''}`}
        onClick={close}
        aria-hidden={!menuOpen}
      />
    </header>
  )
}
