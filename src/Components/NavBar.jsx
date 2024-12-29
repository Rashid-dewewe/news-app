import React from 'react'

export const Navbar = ({setCategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="light">
    <div className="container-fluid">
      <a className="navbar-brand btn btn-primary fw-bold text-white fs-6" >NewsMap</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link" style={{cursor:'pointer'}} onClick={()=> setCategory('health')}>Health</a>
          <a className="nav-link" style={{cursor:'pointer'}} onClick={()=> setCategory('science')}>Science</a>
          <a className="nav-link" style={{cursor:'pointer'}} onClick={()=> setCategory('sports')}>Sports</a>
          <a className="nav-link" style={{cursor:'pointer'}} onClick={()=> setCategory('technology')}>Technology</a>
          <a className="nav-link" style={{cursor:'pointer'}} onClick={()=> setCategory('business')}>Business</a>
          <a className="nav-link" style={{cursor:'pointer'}} onClick={()=> setCategory('entertainment')}>Entertainment</a>

        </div>
      </div>
    </div>
  </nav>
  )
}
