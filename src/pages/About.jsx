import { useId } from 'react'
import { Link } from 'react-router-dom'
import { about, hobbyProjects, profile, work } from '../content.js'

function About() {
  const firstName = profile.name.split(' ')[0] || profile.name
  const ringPathId = useId()
  const workItems = Array.isArray(work) ? work : []

  return (
    <>
      <section className="section hero" aria-label="Hero">
        <div className="heroGrid">
          <div className="heroText">
            <h1 className="title">Hello! I'm {firstName},</h1>
            <p className="subtitle">{profile.blurb}</p>
          </div>

          <div className="heroRight" aria-label="Hero image">
            <div className="circle">
              <img src={profile.heroImage} alt="Portrait" loading="eager" />

              <Link className="ringLink" to="/projects" aria-label="Go to my projects">
                <svg viewBox="0 0 200 200" aria-hidden="true">
                  <defs>
                    <path
                      id={ringPathId}
                      d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0"
                    />
                  </defs>
                  <text className="ringText">
                    <textPath href={`#${ringPathId}`} startOffset="50%" textAnchor="middle">
                      MY PROJECTS • MY PROJECTS • MY PROJECTS •
                    </textPath>
                  </text>
                  <path className="ringArrow" d="M100 72v48m0 0l-10-10m10 10l10-10" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-label="My work">
        <div className="split">
          <div>
            <h2>My work</h2>
            <p className="muted" style={{ marginTop: 10 }}>
              A quick look at what I’m learning and building.
            </p>
          </div>

          <div className="workList" aria-label="Timeline">
            {workItems.map((item) => (
              <div key={`${item.years}-${item.title}`} className="workItem">
                <div className="workIcon" aria-hidden="true">
                  <span className={`workGlyph ${item.icon || 'ring'}`} />
                </div>

                <div>
                  <div className="workYears">{item.years}</div>
                  <div className="workRole">{item.title}</div>
                  {item.subtitle ? <div className="workSub">{item.subtitle}</div> : null}
                  {item.description ? <div className="workDesc">{item.description}</div> : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-label="Hobby projects">
        <div className="split">
          <div>
            <h2>Hobby projects</h2>
          </div>

          <div>
            <p className="muted" style={{ marginTop: 10 }}>
              Side builds, experiments, and practice projects.
            </p>
          </div>
        </div>

        <div className={`mosaic ${hobbyProjects.length === 3 ? 'mosaicThree' : ''}`}>
          {hobbyProjects.map((project, index) => (
            <div
              key={project.title}
              className={`mosaicItem ${['mosaicA', 'mosaicB', 'mosaicC', 'mosaicD'][index]}`}
            >
              <Link to="/projects" aria-label={`Open projects page (from ${project.title})`}>
                <div className="mosaicMedia" aria-hidden="true">
                  <img src={project.image} alt="" loading="lazy" />
                </div>
                <div className="mosaicBody">
                  <div className="mosaicTitle">{project.title}</div>
                  <div className="mosaicSub">{project.subtitle}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

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
    </>
  )
}

export default About
