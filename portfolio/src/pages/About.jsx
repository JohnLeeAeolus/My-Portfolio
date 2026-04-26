import { about } from '../content.js'

function About() {
  return (
    <section className="section" aria-label="About">
      <div className="split">
        <div>
          <h2>About me</h2>
          <p className="muted" style={{ marginTop: 12 }}>
            {about.intro}
          </p>
        </div>

        <div className="card stack">
          <div className="twoCol">
            <div>
              <div className="subhead">Education</div>
              <ul className="list">
                {about.education.map((edu) => (
                  <li key={`${edu.program}-${edu.school}`}>
                    <div className="liTitle">{edu.program}</div>
                    <div className="liMeta muted">
                      {edu.school} • {edu.years}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="subhead">Certifications</div>
              <ul className="list">
                {about.certifications.map((cert) => (
                  <li key={cert} className="muted">
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
