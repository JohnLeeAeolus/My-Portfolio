import { Link, useNavigate } from 'react-router-dom'
import { projects } from '../content.js'

function Projects() {
  const pastels = ['var(--pastel-a)', 'var(--pastel-b)', 'var(--pastel-c)']
  const navigate = useNavigate()

  function getProjectMedia(project) {
    const items = []

    if (project?.heroImage) items.push(project.heroImage)
    if (Array.isArray(project?.gallery)) items.push(...project.gallery)

    return items.filter(Boolean)
  }

  function openProject(slug) {
    if (!slug) return
    navigate(`/projects/${slug}`)
  }

  function onCardClick(event, slug) {
    if (!slug) return
    if (event.target && event.target.closest && event.target.closest('a, button')) return
    openProject(slug)
  }

  function onCardKeyDown(event, slug) {
    if (!slug) return
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      openProject(slug)
    }
  }

  return (
    <section className="section" aria-label="Projects">
      <div className="sectionHeader">
        <h2>My projects</h2>
        <p className="muted">Selected work and builds.</p>
      </div>

      <div className="projectBlocks">
        {projects.map((project, index) => (
          
          <article
            key={project.title}
            className="projectBlock"
            style={{ background: pastels[index % pastels.length] }}
            role={project.slug ? 'link' : undefined}
            tabIndex={project.slug ? 0 : undefined}
            aria-label={project.slug ? `Open project: ${project.title}` : undefined}
            onClick={(event) => onCardClick(event, project.slug)}
            onKeyDown={(event) => onCardKeyDown(event, project.slug)}
          >
            <div className="projectBlockInner">
              <div>
                <div className="projectKicker">{project.tech?.[0] || 'Project'}</div>
                <div className="projectBlockTitle">{project.title}</div>
                <p className="projectBlockText">{project.description}</p>

                <div className="tagRow" aria-label="Tech stack" style={{ marginTop: 12 }}>
                  {project.tech.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="linkRow" style={{ marginTop: 14 }}>
                  {project.slug ? (
                    <Link to={`/projects/${project.slug}`}>View project ←</Link>
                  ) : null}
                  {project.links?.live ? (
                    <a href={project.links.live} target="_blank" rel="noreferrer">
                      Live
                    </a>
                  ) : null}
                  {project.links?.code ? (
                    <a href={project.links.code} target="_blank" rel="noreferrer">
                      Code
                    </a>
                  ) : null}
                </div>
              </div>

              <div className="projectMedia" aria-hidden="true">
                {(() => {
                  const media = getProjectMedia(project)
                  const tiles = [media[0], media[1], media[2]]

                  return tiles.map((src, tileIndex) => (
                    <div key={tileIndex} className="mediaTile">
                      {src ? <img src={src} alt="" loading="lazy" /> : null}
                    </div>
                  ))
                })()}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
