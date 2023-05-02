function Nav({ page, handlePage}) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
    <div className="container-fluid">
        <a className="navbar-brand text-light fs-4" href="/">Damian Galus - FullStack Developer</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-around py-2 fs-4" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
            <a 
            href="#About"
            onClick={(e) => handlePage(e, 'about')}
            className={page === 'about' ? 'nav-link active' : 'nav-link text-light'}
            >
                About
            </a>
            </li>
            <li className="nav-item">
            <a 
             href="#Portfolio"
             onClick={(e) => handlePage(e, 'portfolio')}
             className={page === 'portfolio' ? 'nav-link active' : 'nav-link text-light'}
            >
                Portfolio
            </a>
            </li>
            <li className="nav-item">
            <a 
             href="#Contact"
             onClick={(e) => handlePage(e, 'contact')}
             className={page === 'contact' ? 'nav-link active' : 'nav-link text-light'}
            >
                Contact
            </a>
            </li>
            <li className="nav-item">
            <a 
             href="#Resume"
             onClick={(e) => handlePage(e, 'resume')}
             className={page === 'resume' ? 'nav-link active' : 'nav-link text-light'}
            >
                Resume
            </a>
            </li>
        </ul>
        </div>
    </div>
    </nav>
  );
}

export default Nav;


