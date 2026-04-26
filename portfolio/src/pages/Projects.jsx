import { projects } from '../content.js'

function Projects() {
  const pastels = ['var(--pastel-a)', 'var(--pastel-b)', 'var(--pastel-c)']

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
                <div className="mediaTile" />
                <div className="mediaTile" />
                <div className="mediaTile" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
