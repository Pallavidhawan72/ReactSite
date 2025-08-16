import React, { useEffect, useState } from "react";
import axios from "../api/axios";

function Skills() {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    axios.get("/skills").then(res => setSkills(res.data));
  }, []);

  return (
    <section className="container py-5">
      <h1 className="mb-4 text-center fw-bold" style={{ color: '#3a6186' }}>Skills</h1>
      {skills.length ? (
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {skills.map(skill => (
            <div key={skill._id} className="bg-light border rounded-3 px-4 py-3 shadow-sm text-center" style={{ minWidth: 180, maxWidth: 260 }}>
              <div className="fw-semibold" style={{ color: '#2d3a4a', fontSize: '1.1rem' }}>{skill.name}</div>
              <div className="text-muted small mb-1">{skill.category}</div>
              <span className="badge bg-primary">{skill.level}</span>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-muted">No skills found.</p>
      )}
    </section>
  );
}

export default Skills;
