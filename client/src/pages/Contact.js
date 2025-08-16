import React from "react";

function Contact() {
  return (
    <section className="container py-5">
      <h1 className="mb-4 text-center fw-bold" style={{ color: '#3a6186' }}>Contact</h1>
      <div className="contact-form-box">
        <form action="https://formspree.io/f/your-form-id" method="POST">
          <div>
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name="name" required placeholder="Pallavi" />
          </div>
          <div>
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name="email" required placeholder="pallavidhawan72@gmail.com" />
          </div>
          <div>
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" name="message" rows="4" required></textarea>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary btn-lg">Send</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
