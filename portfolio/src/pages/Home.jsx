import { useId, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { about, profile, projects, skillGroups, testimonials } from '../content.js'

function Home() {
  const featured = projects.slice(0, 4)
  const firstName = profile.name.split(' ')[0] || profile.name
  const roleShort = profile.role.split('•')[0]?.trim() || profile.role
  const ringPathId = useId()
  const [testimonialIndex, setTestimonialIndex] = useState(0)

  const currentTestimonial = testimonials?.length
    ? testimonials[Math.min(testimonialIndex, testimonials.length - 1)]
    : null

  const skillsColumns = useMemo(() => {
    if (!Array.isArray(skillGroups) || skillGroups.length === 0) return []

    // Flatten items to match the template's simple list look.
    const items = skillGroups.flatMap((g) => g.items || [])

    const cols = [[], [], []]
    items.forEach((item, idx) => {
      cols[idx % 3].push(item)
    })

    return cols.filter((col) => col.length)
  }, [])

  const timelineItems = [
    about.education?.[0]
      ? {
          title: about.education[0].program,
          meta: `${about.education[0].school} • ${about.education[0].years}`,
        }
      : null,
    {
      title: 'Oracle Cloud & Databases',
      meta: 'Certified foundations + SQL/NoSQL fundamentals',
    },
    {
      title: 'Building real projects',
      meta: 'Learning by shipping apps and improving systems',
    },
  ].filter(Boolean)

  return (
    <>
      <section className="section hero" aria-label="Hero">
        <div className="heroGrid">
          <div className="heroText">
            <p className="eyebrow">{roleShort}</p>
            <h1 className="title">
              Hello! I'm {firstName},
              <br />a {roleShort.toLowerCase()}
            </h1>
            <p className="subtitle">
              {profile.blurb}{' '}
              {profile.location ? (
                <span className="muted">({profile.location})</span>
              ) : null}
            </p>
            <div className="ctaRow">
              <Link className="button primary" to="/about">
                More about me
              </Link>
              <Link className="button" to="/projects">
                Browse projects
              </Link>
            </div>
            <div className="metaRow" aria-label="Social links">
              {profile.links?.github ? (
                <a href={profile.links.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              ) : null}
            </div>
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

          <div className="timeline" aria-label="Timeline">
            {timelineItems.map((item) => (
              <div key={item.title} className="timelineItem">
                <div className="timelineDot" aria-hidden="true" />
                <div>
                  <div className="timelineTitle">{item.title}</div>
                  <div className="timelineMeta">{item.meta}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-label="Hobby projects">
        <div className="sectionHeader">
          <h2>Hobby projects</h2>
          <p className="muted">Side builds, experiments, and practice projects.</p>
        </div>

        <div className="mosaic">
          {featured.map((project, index) => (
            <div
              key={project.title}
              className={`mosaicItem ${['mosaicA', 'mosaicB', 'mosaicC', 'mosaicD'][index]}`}
            >
              <Link to="/projects" aria-label={`Open projects page (from ${project.title})`}>
                <div className="mosaicMedia" aria-hidden="true" />
                <div className="mosaicBody">
                  <div className="mosaicTitle">{project.title}</div>
                  <div className="mosaicSub">{project.tech?.slice(0, 2).join(' • ')}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="section" aria-label="Skills and testimonials">
        <div className="skillsWrap">
          <h2 className="skillsTitle">My skills</h2>

          <div className="skillsGrid" aria-label="Skills">
            {skillsColumns.map((col, colIndex) => (
              <div key={colIndex} className="skillsCol">
                {col.map((item) => (
                  <div key={item} className="skillsItem">
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {currentTestimonial ? (
          <div className="testimonial" aria-label="Testimonials">
            <div className="testimonialMedia" aria-hidden="true">
              <div className="testimonialBlob" />
              <div className="testimonialImg">
                <img src={currentTestimonial.image || profile.heroImage} alt="" />
              </div>
            </div>

            <div>
              <div className="testimonialLabel">{currentTestimonial.label || 'Testimonials'}</div>
              <div className="testimonialQuote">“{currentTestimonial.quote}”</div>
              <div className="testimonialName">{currentTestimonial.name}</div>
              {currentTestimonial.meta ? (
                <div className="testimonialMeta">{currentTestimonial.meta}</div>
              ) : null}

              {testimonials.length > 1 ? (
                <button
                  type="button"
                  className="tinyButton"
                  onClick={() => setTestimonialIndex((i) => (i + 1) % testimonials.length)}
                >
                  Next
                  <span aria-hidden="true">←</span>
                </button>
              ) : null}
            </div>
          </div>
        ) : null}
      </section>
    </>
  )
}

export default Home
