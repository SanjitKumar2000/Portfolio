import '../App.css'


function Header() {


    return (
        <div className="fixed-top">
            <nav className="navbar navbar-expand-lg bg-body-tertiary" >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" style={{ paddingLeft: '5%', fontSize: '200%', fontWeight: '500' }} >SANJIT KUMAR</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <button className="nav-link active" aria-current="page" onClick={() => window.scrollTo(0, 0)} >HOME</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link active" onClick={() => window.scrollTo(0, 905)} >ABOUT</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link active" onClick={() => window.scrollTo(0, 1790)} >PROJECTS</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link active" onClick={() => window.scrollTo(0, 2500)} >CONTACT</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;