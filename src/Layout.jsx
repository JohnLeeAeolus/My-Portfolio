import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { profile } from './content.js'

function Layout() {
  const location = useLocation()
  const isContactPage = location.pathname === '/contact'
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isRouteFading, setIsRouteFading] = useState(false)

  const facebookHref = profile.links?.facebook
  const facebookLabel = facebookHref
    ? facebookHref.replace(/^https?:\/\//, '')
    : ''

  function onFooterSubmit(event) {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const fromEmail = String(formData.get('email') || '').trim()
    const message = String(formData.get('message') || '').trim()

    const subject = fromEmail
      ? `Portfolio inquiry from ${fromEmail}`
      : 'Portfolio inquiry'

    const bodyLines = [
      fromEmail ? `Email: ${fromEmail}` : null,
      message ? `\n${message}` : null,
    ].filter(Boolean)

    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`
    window.location.href = mailto
    form.reset()
  }

  useEffect(() => {
    setIsNavOpen(false)
  }, [location.pathname])

  useEffect(() => {
    setIsRouteFading(true)
    const id = window.setTimeout(() => setIsRouteFading(false), 220)
    return () => window.clearTimeout(id)
  }, [location.pathname])

  return (
    <div className="page">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="header">
        <nav className="nav" aria-label="Primary">
          <Link className="brand" to="/" aria-label="Go to home">
            {profile.name}
          </Link>

          <button
            type="button"
            className="navToggle"
            aria-label={isNavOpen ? 'Close menu' : 'Open menu'}
            aria-controls="primary-nav-links"
            aria-expanded={isNavOpen}
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="navToggleBars" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>

          <div className="navLinks navLinksDesktop">
            <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              Projects
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              About me
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              Contact
            </NavLink>
          </div>

          <div
            id="primary-nav-links"
            className={`navLinks navLinksMobile ${isNavOpen ? 'open' : ''}`}
          >
            <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              Projects
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              About me
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              Contact
            </NavLink>
          </div>
        </nav>
      </header>

      <main id="main">
        <div className="routeView" key={location.pathname}>
          <Outlet />
        </div>
      </main>

      <div className={`routeOverlay ${isRouteFading ? 'on' : ''}`} aria-hidden="true" />

      <footer className="footer" aria-label="Footer">
        {isContactPage ? (
          <div className="contactFooterInner">
            <div className="contactFooterGrid">
              <div className="contactFooterLinks" aria-label="Social links">
                <a
                  className="contactFooterLink"
                  href={profile.links?.instagram || 'https://instagram.com/'}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="contactFooterIcon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <rect x="6" y="6" width="12" height="12" rx="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
                      <circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
                      <circle cx="16.5" cy="7.6" r="1" fill="currentColor" />
                    </svg>
                  </span>
                  <span>Instagram</span>
                </a>

                <a
                  className="contactFooterLink"
                  href={facebookHref || 'https://facebook.com/'}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="contactFooterIcon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path
                        d="M14 8.6h2V6h-2.3c-2.4 0-3.7 1.3-3.7 3.6V11H8v2.6h2v4.4h2.7v-4.4h2.3l.4-2.6h-2.7V10c0-.9.2-1.4 1.3-1.4Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <span>Facebook</span>
                </a>

                <a
                  className="contactFooterLink"
                  href={profile.links?.github || 'https://github.com/'}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="contactFooterIcon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fill="currentColor"
                        d="M12 .6a11.4 11.4 0 0 0-3.6 22.2c.6.1.8-.2.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 2 1.2 3.3 0 4.6-2.7 5.6-5.3 5.9.4.3.8 1 .8 2.1v3.1c0 .4.2.7.8.6A11.4 11.4 0 0 0 12 .6Z"
                      />
                    </svg>
                  </span>
                  <span>GitHub</span>
                </a>

                <a
                  className="contactFooterLink"
                  href={profile.links?.telegram || 'https://t.me/Aeoluscadano'}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="contactFooterIcon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path
                        d="M19.6 6.1 4.7 11.8c-.9.3-.9 1.6.1 1.8l3.8 1 1.5 4.6c.3.9 1.5 1.1 2.1.4l2.4-2.7 3.9 2.9c.7.5 1.7.1 1.8-.8l2.2-12.1c.2-1-.8-1.8-1.9-1.4Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 14.5 18.6 8.2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <span>Telegram</span>
                </a>

                <a
                  className="contactFooterLink"
                  href={profile.links?.linkedin || 'https://linkedin.com/'}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="contactFooterIcon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <rect x="6" y="6" width="12" height="12" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
                      <circle cx="9.2" cy="10" r="1" fill="currentColor" />
                      <path d="M8.4 16v-4.2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      <path d="M11.2 16v-4.2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      <path d="M11.2 13.4c.4-1.1 1.4-1.7 2.5-1.7 1.6 0 2.1 1 2.1 2.6V16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>Linkedin</span>
                </a>

                <a className="contactFooterLink" href={`mailto:${profile.email}`}>
                  <span className="contactFooterIcon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        d="M6.2 7.5h11.6A2.2 2.2 0 0 1 20 9.7v4.6a2.2 2.2 0 0 1-2.2 2.2H6.2A2.2 2.2 0 0 1 4 14.3V9.7a2.2 2.2 0 0 1 2.2-2.2Z"
                      />
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinejoin="round"
                        d="m5 9 7 4.6L19 9"
                      />
                    </svg>
                  </span>
                  <span>My email</span>
                </a>
              </div>

              <div className="contactFooterDivider" aria-hidden="true" />

              <div className="contactFooterDetails" aria-label="Contact details">
                <div className="contactFooterDetail">
                  <div className="contactFooterDetailLabel">Email</div>
                  <div className="contactFooterDetailValue">{profile.email}</div>
                </div>
              </div>
            </div>

            <div className="contactFooterLegal" aria-label="Legal">
              © {new Date().getFullYear()} {profile.name}. Privacy Terms Sitemap*
            </div>
          </div>
        ) : (
          <div className="footerInner">
            <div className="footerLeft">
              <p className="footerTitle">Say hello and let's work together !</p>

              <div className="footerIconRow" aria-label="Social links">
                {profile.links?.github ? (
                  <a
                    className="footerIcon"
                    href={profile.links.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    title="GitHub"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fill="currentColor"
                        d="M12 .6a11.4 11.4 0 0 0-3.6 22.2c.6.1.8-.2.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 2 1.2 3.3 0 4.6-2.7 5.6-5.3 5.9.4.3.8 1 .8 2.1v3.1c0 .4.2.7.8.6A11.4 11.4 0 0 0 12 .6Z"
                      />
                    </svg>
                  </a>
                ) : null}

                <a
                  className="footerIcon"
                  href={`mailto:${profile.email}`}
                  aria-label="Email"
                  title="Email"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M4.5 6.5h15A2.5 2.5 0 0 1 22 9v6a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 15V9a2.5 2.5 0 0 1 2.5-2.5Zm0 2.2V9l7.1 4.6c.25.16.55.16.8 0L19.5 9v-.3L12 13.6 4.5 8.7Z"
                    />
                  </svg>
                </a>
              </div>

              <div className="footerLegal" aria-label="Legal">
                <span>© {new Date().getFullYear()} {profile.name}</span>
                <span aria-hidden="true"> · </span>
                <span>Privacy</span>
                <span aria-hidden="true"> · </span>
                <span>Terms</span>
                <span aria-hidden="true"> · </span>
                <span>Sitemap</span>
              </div>
            </div>

            <form className="footerForm" onSubmit={onFooterSubmit}>
              <div className="formRow">
                <div className="footerField">
                  <label className="footerFloatLabel" htmlFor="footer-email">
                    Email
                  </label>
                  <input
                    className="fieldInput"
                    id="footer-email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    autoComplete="email"
                  />
                </div>

                <div className="footerField">
                  <label className="footerFloatLabel" htmlFor="footer-message">
                    Input your message
                  </label>
                  <textarea
                    className="fieldInput"
                    id="footer-message"
                    name="message"
                    rows={4}
                    placeholder="Describe your project"
                  />
                </div>

                <div className="footerActions">
                  <button type="submit" className="footerSubmit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </footer>
    </div>
  )
}

export default Layout
