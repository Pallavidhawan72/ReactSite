import React, { useEffect, useState } from "react";
import axios from "../api/axios";

function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios.get("/projects").then(res => setProjects(res.data));
  }, []);

  return (
    <section className="container py-5">
      <h1 className="mb-4 text-center fw-bold" style={{ color: '#3a6186' }}>Projects</h1>
      {projects.length ? (
        <div className="row g-4">
          {projects.map(project => (
            <div className="col-md-6 col-lg-4" key={project._id}>
              <div className="card h-100 shadow-sm border-0">
                {project.screenshots && project.screenshots.length > 0 && (
                  <img src={project.screenshots[0]} className="card-img-top" alt={project.title} style={{maxHeight:220,objectFit:'cover', borderRadius:'12px 12px 0 0'}} />
                )}
                <div className="card-body">
                  <h5 className="card-title fw-semibold">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-gradient mb-2">View Project</a>}
                  {project.skills && project.skills.length > 0 && (
                    <div className="mt-2">
                      {project.skills.map((skill, idx) => {
                        // Only show if it's a real skill name, not an ObjectID
                        const skillName = typeof skill === 'string' ? skill : (skill && skill.name);
                        if (!skillName || /^[a-f0-9]{24}$/.test(skillName)) return null;
                        return (
                          <span key={skill._id || skill.name || idx} className="badge bg-secondary me-1 mb-1">
                            {skillName}
                          </span>
                        );
                      })}
                    </div>
                  )}
                  {project.screenshots && project.screenshots.length > 1 && (
                    <div className="mt-2">
                      <span className="text-muted small">More images: </span>
                      {project.screenshots.slice(1).map((url, idx) => (
                        <a key={idx} href={url} target="_blank" rel="noopener noreferrer" className="me-2 text-decoration-underline small">Image {idx+2}</a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-muted">No projects found.</p>
      )}
    </section>
  );
}

export default Projects;
