import React from "react";


function Home() {
  return (
    <section className="hero-section d-flex align-items-center justify-content-center" style={{ minHeight: '80vh', background: 'linear-gradient(120deg, #f8f9fa 60%, #eaf0f6 100%)' }}>
      <div className="bg-white p-5 rounded-4 shadow-lg text-center" style={{ maxWidth: 700 }}>
        <img
          src="https://ui-avatars.com/api/?name=Pallavi+Dhawan&background=3a6186&color=fff&size=140"
          alt="Pallavi Dhawan Avatar"
          className="mb-4 rounded-circle shadow"
          style={{ width: 140, height: 140, objectFit: 'cover', border: '5px solid #3a6186' }}
        />
        <h1 className="mb-2 display-5 fw-bold" style={{ color: '#2d3a4a' }}>Pallavi Dhawan</h1>
        <h2 className="mb-3 fw-semibold" style={{ color: '#3a6186', fontSize: '2rem' }}>Full Stack Developer</h2>
        <p className="lead mb-0" style={{ color: '#444' }}>
          Welcome to my portfolio! Here you can find my <b>projects</b>, <b>skills</b>, and contact information.
        </p>
      </div>
    </section>
  );
}

export default Home;
