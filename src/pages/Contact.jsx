import { useId, useState } from 'react'
import { profile } from '../content.js'

function Contact() {
  const ringPathId = useId()
  const [errors, setErrors] = useState({ email: '', message: '' })
  const [status, setStatus] = useState('')

  function isValidEmail(value) {
    const v = String(value || '').trim()
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
  }

  function onSubmit(event) {
    event.preventDefault()
    setStatus('')

    const form = event.currentTarget
    const formData = new FormData(form)
    const fromEmail = String(formData.get('email') || '').trim()
    const message = String(formData.get('message') || '').trim()

    const nextErrors = {
      email: '',
      message: '',
    }

    if (!isValidEmail(fromEmail)) {
      nextErrors.email = 'Please enter a valid email address.'
    }

    if (!message) {
      nextErrors.message = 'Please enter a message.'
    }

    if (nextErrors.email || nextErrors.message) {
      setErrors(nextErrors)
      return
    }

    setErrors({ email: '', message: '' })

    const subject = fromEmail
      ? `Portfolio inquiry from ${fromEmail}`
      : 'Portfolio inquiry'

    const bodyLines = [
      fromEmail ? `Email: ${fromEmail}` : null,
      message ? `\n${message}` : null,
    ].filter(Boolean)

    setStatus('Opening your email client…')
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`
    form.reset()
  }

  return (
    <section className="section hero" aria-label="Contact">
      <div className="heroGrid">
        <div className="heroText">
          <h1 className="title">Say hello and let's work together!</h1>

          <form className="contactFormPlain" onSubmit={onSubmit}>
            <div className="contactFields">
              <div>
                <label className="contactLabel" htmlFor="contact-email">
                  Email
                </label>
                <input
                  className="fieldInputLight"
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="Your email address"
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'contact-email-error' : undefined}
                />
                {errors.email ? (
                  <div id="contact-email-error" className="formError" role="alert">
                    {errors.email}
                  </div>
                ) : null}
              </div>

              <div>
                <label className="contactLabel" htmlFor="contact-message">
                  Message
                </label>
                <textarea
                  className="fieldInputLight"
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder="Describe your project"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                />
                {errors.message ? (
                  <div id="contact-message-error" className="formError" role="alert">
                    {errors.message}
                  </div>
                ) : null}
              </div>

              <div className="contactActions">
                <button type="submit" className="button primary contactSubmit">
                  Submit <span aria-hidden="true">←</span>
                </button>
                {status ? (
                  <div className="formStatus" role="status" aria-live="polite">
                    {status}
                  </div>
                ) : null}
              </div>
            </div>
          </form>
        </div>

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
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
