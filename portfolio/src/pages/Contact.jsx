import { useId } from 'react'
import { profile } from '../content.js'

function Contact() {
  const ringPathId = useId()

  function onSubmit(event) {
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

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`
    form.reset()
  }

  return (
    <section className="section" aria-label="Contact">
      <div className="sectionHeader">
        <h2>Contact</h2>
        <p className="muted">Want to work together? Send a message.</p>
      </div>

      <div className="contactHero">
        <form className="contactForm" onSubmit={onSubmit}>
          <div className="formRow">
            <div>
              <div className="subhead">Email</div>
              <input
                className="fieldInputLight"
                name="email"
                type="email"
                placeholder="Your email address"
                autoComplete="email"
              />
            </div>

            <div>
              <div className="subhead">Message</div>
              <textarea
                className="fieldInputLight"
                name="message"
                rows={6}
                placeholder="Describe your project"
              />
            </div>

            <div className="ctaRow" style={{ marginTop: 4 }}>
              <button type="submit" className="button primary">
                Submit
              </button>
              <a className="button" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </div>
          </div>
        </form>

        <div className="heroRight" aria-label="Contact image">
          <div className="circle">
            <img src={profile.contactImage} alt="Contact" loading="lazy" />

            <span className="ringLink" aria-hidden="true">
              <svg viewBox="0 0 200 200" aria-hidden="true">
                <defs>
                  <path
                    id={ringPathId}
                    d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0"
                  />
                </defs>
                <text className="ringText">
                  <textPath href={`#${ringPathId}`} startOffset="50%" textAnchor="middle">
                    CONTACT ME • CONTACT ME • CONTACT ME •
                  </textPath>
                </text>
                <path className="ringArrow" d="M100 72v48m0 0l-10-10m10 10l10-10" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
