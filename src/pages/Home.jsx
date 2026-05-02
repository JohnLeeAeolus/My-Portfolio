import { useId, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { profile, projects, skillGroups } from '../content.js'

function Home() {
  const firstName = profile.name.split(' ')[0] || profile.name
  const roleShort = profile.role.split('•')[0]?.trim() || profile.role
  const ringPathId = useId()

  const featured = Array.isArray(projects) ? projects.slice(0, 2) : []

  const skillsColumns = useMemo(() => {
    if (!Array.isArray(skillGroups) || skillGroups.length === 0) return []

    const items = skillGroups.flatMap((g) => g.items || [])
    const cols = [[], [], []]
    items.forEach((item, idx) => {
      cols[idx % 3].push(item)
    })

    return cols.filter((col) => col.length)
  }, [])

  return (
    <>
      <section className="section hero" aria-label="Hero">
        <div className="heroGrid">
          <div className="heroText">
            <h1 className="title">
              Hello! I'm {firstName}, a
              <br />{roleShort.toLowerCase()}
            </h1>
            <p className="subtitle">
              {profile.blurb}{' '}
              {profile.location ? (
                <span className="muted">({profile.location})</span>
              ) : null}
            </p>

            <Link className="heroLink" to="/about" aria-label="More about me">
              More about me <span aria-hidden="true">→</span>
            </Link>
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

      <section className="section" aria-label="Featured projects">
        <div className="featureBlocks" aria-label="Project highlights">
          {featured.map((project, index) => {
            const bg = index === 0 ? 'var(--pastel-a)' : 'var(--pastel-b)'
            const rawImages = [project.thumb, ...(project.gallery || []), project.heroImage].filter(Boolean)
            const images = (index === 0 ? rawImages.slice(0, 3) : rawImages.slice(0, 2)).filter(Boolean)

            return (
              <article key={project.slug || project.title} className="featureBlock" style={{ background: bg }}>
                <div className={`featureInner ${index === 1 ? 'featureReverse' : ''}`}
                >
                  <div className="featureText">
                    <div className="featureKicker">{project.category || project.tech?.[0] || 'Project'}</div>
                    <div className="featureTitle">{project.title}</div>
                    <p className="featureDesc">{project.description}</p>

                    {project.slug ? (
                      <Link className="featureLink" to={`/projects/${project.slug}`}>
                        View project <span aria-hidden="true">←</span>
                      </Link>
                    ) : null}
                  </div>

                  <div className={`featureMedia ${images.length === 3 ? 'featureMediaThree' : 'featureMediaTwo'}`} aria-hidden="true">
                    {images.map((src, imgIndex) => (
                      <div key={`${src}-${imgIndex}`} className="featureImg">
                        <img src={src} alt="" loading="lazy" />
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <div className="browseRow">
          <Link className="browseButton" to="/projects">
            Browse all projects
          </Link>
        </div>
      </section>

      <section className="section" aria-label="Skills">
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
      </section>
    </>
  )
}

export default Home
