const links = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <a className="logo" href="#home">
          MONO//WORKS
        </a>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
