function About() {
  return (
    <section className="section container" id="about">
      <div className="section-heading">
        <div>
          <p className="eyebrow">ABOUT</p>
          <h2>Built to learn, shared to grow.</h2>
        </div>
      </div>
      <div className="about-content">
        <p>
          MONO//WORKS is a small, straightforward portfolio made by a student
          who is learning front-end development. Each project here started as a
          practice exercise: plan the idea, build the interface, then improve it
          based on what worked.
        </p>
        <p>
          The site itself is built with React and plain CSS. No templates, image
          libraries or complex tooling — just components, state and a bit of
          careful styling.
        </p>
        <div className="about-facts">
          <div>
            <span className="fact-number">06</span>
            <span className="fact-label">Starter projects</span>
          </div>
          <div>
            <span className="fact-number">03</span>
            <span className="fact-label">Categories</span>
          </div>
          <div>
            <span className="fact-number">01</span>
            <span className="fact-label">Portfolio, always improving</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
