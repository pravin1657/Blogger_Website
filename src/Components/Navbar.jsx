
import React from 'react';
import {Link} from 'react-router-dom';
class Navbar extends React.Component{
    render(){
        return(
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Blogger</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link "  to="/Explore">Explore</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/ContactUs">Cotact Us</Link>
        </li>
      </ul>
      <span className="navbar-text">
      <Link to="/Login" className="col-1"><h1><i className="bi bi-person-circle"></i></h1></Link>
      </span>
    </div>
  </div>
</nav>
        );
    }
}
export default Navbar;

