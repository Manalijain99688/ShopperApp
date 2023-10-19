import React from 'react'
import {BrowserRouter,Link,Route,Routes} from "react-router-dom"
import Login from './Login'
import Card from './Card'
import "./Card.css"
export default function Navbar(props) {

  function pleaselogout(){
        window.location.pathname="/login"
  }
  
  return (
    <BrowserRouter>
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Shopper App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
        {
          props.intial ? <>
              <li className="nav-item">
          <Link className="nav-link active" to="/home">Home</Link>
        </li>
       
            <button className='btn  logout' onClick={pleaselogout}>Log Out</button>
          </>:<li className="nav-item">
          <Link className="nav-link active" to="/login">Login</Link>
          </li>
        }
        
        
       
        
      </ul>
      <form className="d-flex ml-auto g-5"> {/* Use ml-auto to push it to the right */}
  
</form>
<button type="button" id="mypopover" data-html="true" className="btn btn-dark" data-container="body" data-toggle="popover" data-placement="bottom" data-content="">
  Cart
</button>
    </div>
  </div>
</nav>
    </div>
    <Routes>
      <Route path="/home" element={<Card/>}></Route>
         
          <Route path="/login" element={<Login info={props.data}/>}></Route>
        
         </Routes>

       </BrowserRouter>
  )
}