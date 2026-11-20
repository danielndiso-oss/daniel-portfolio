function Contact() {
  return (
    <section className="section container" id="contact">
      <div className="section-heading">
        <div>
          <p className="eyebrow">CONTACT</p>
          <h2>Let&apos;s talk about the next idea.</h2>
          <p className="section-intro">
            Questions, feedback or collaboration ideas are welcome.
          </p>
        </div>
      </div>
      <ul className="contact-list">
        <li>
          <span className="contact-label">Email</span>
          <a href="mailto:Daniel.ndiso@student.moringaschool.com">
            Daniel.ndiso@student.moringaschool.com
          </a>
        </li>
        <li>
          <span className="contact-label">Phone</span>
          <span>0706355687</span>
        </li>
        <li>
          <span className="contact-label">GitHub</span>
          <span>Daniel-ndiso-oss</span>
        </li>
        <li>
          <span className="contact-label">Location</span>
          <span>Open to remote collaboration</span>
        </li>
      </ul>
    </section>
  )
}

export default Contact
