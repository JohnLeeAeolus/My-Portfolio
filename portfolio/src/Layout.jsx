import { Link, NavLink, Outlet } from 'react-router-dom'
import { profile } from './content.js'

function Layout() {
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
          <div className="navLinks">
            <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              Work
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
        <Outlet />
      </main>

      <footer className="footer" aria-label="Footer">
        <div className="footerInner">
          <div>
            <p className="footerTitle">Say hello and let's work together!</p>
            <div className="footerMeta" aria-label="Footer links">
              <a href={`mailto:${profile.email}`}>My email</a>
              {profile.links?.github ? (
                <a href={profile.links.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              ) : null}
            </div>
          </div>

          <form className="footerForm" onSubmit={onFooterSubmit}>
            <div className="formRow">
              <div>
                <div className="fieldLabel">Email</div>
                <input
                  className="fieldInput"
                  name="email"
                  type="email"
                  placeholder="Your email address"
                  autoComplete="email"
                />
              </div>

              <div>
                <div className="fieldLabel">Input your message</div>
                <textarea
                  className="fieldInput"
                  name="message"
                  rows={4}
                  placeholder="Describe your project"
                />
              </div>

              <div className="ctaRow" style={{ marginTop: 4 }}>
                <button type="submit" className="button primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="footerBottom">
          <div className="footerBottomInner">
            <span>© {new Date().getFullYear()} {profile.name}</span>
            <span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
