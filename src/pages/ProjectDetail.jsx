import { Link, Navigate, useParams } from 'react-router-dom'
import { profile, projects, testimonials } from '../content.js'

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  const other = projects.filter((p) => p.slug !== project.slug).slice(0, 3)
  const t = testimonials?.[0] || null

  return (
    <section className="section" aria-label="Project details">
      <div className="detailTop">
        <div>
          {project.category ? <div className="detailKicker">{project.category}</div> : null}
          <h2 className="detailTitle">{project.title}</h2>
          <p className="detailLead muted">{project.description}</p>
        </div>

        {(project.date || project.client) && (
          <aside className="detailMeta" aria-label="Project metadata">
            {project.date ? (
              <div className="detailMetaRow">
                <div className="detailMetaLabel">Date</div>
                <div className="detailMetaValue">{project.date}</div>
              </div>
            ) : null}
            {project.client ? (
              <div className="detailMetaRow">
                <div className="detailMetaLabel">Client Name</div>
                <div className="detailMetaValue">{project.client}</div>
              </div>
            ) : null}
          </aside>
        )}
      </div>

      <div className="detailHero">
        <img src={project.heroImage} alt="Project hero" loading="eager" />
      </div>

      <div className="detailBody">
        <h3 className="detailSectionTitle">{project.detailHeading || 'Overview'}</h3>
        <p className="detailText">{project.detailText || project.description}</p>

        {Array.isArray(project.gallery) && project.gallery.length ? (
          <div className="detailGallery" aria-label="Project images">
            {project.gallery.slice(0, 2).map((src) => (
              <div key={src} className="detailGalleryItem">
                <img src={src} alt="" loading="lazy" />
              </div>
            ))}
          </div>
        ) : null}
      </div>

      {t ? (
        <div className="testimonial" aria-label="Testimonials" style={{ marginTop: 24 }}>
          <div className="testimonialMedia" aria-hidden="true">
            <div className="testimonialBlob" />
            <div className="testimonialImg">
              <img src={t.image || profile.heroImage} alt="" />
            </div>
          </div>

          <div>
            <div className="testimonialLabel">{t.label || 'Testimonials'}</div>
            <div className="testimonialQuote">“{t.quote}”</div>
            <div className="testimonialName">{t.name}</div>
            {t.meta ? <div className="testimonialMeta">{t.meta}</div> : null}
          </div>
        </div>
      ) : null}

      {other.length ? (
        <div className="otherProjects" aria-label="Other projects">
          <div className="otherHeader">
            <h2>Other projects</h2>
            <Link className="otherExplore" to="/projects">
              Explore ↗
            </Link>
          </div>

          <div className="otherGrid">
            {other.map((p) => (
              <Link key={p.slug} to={`/projects/${p.slug}`} className="otherCard">
                <div className="otherMedia">
                  <img src={p.thumb || p.heroImage} alt="" loading="lazy" />
                </div>
                <div className="otherTitle">{p.title}</div>
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  )
}

export default ProjectDetail
