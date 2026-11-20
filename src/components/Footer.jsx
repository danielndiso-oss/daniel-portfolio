function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span className="logo">MONO//WORKS</span>
        <p>&copy; {new Date().getFullYear()} MONO//WORKS. Built with React.</p>
        <nav aria-label="Footer navigation">
          <ul className="footer-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
