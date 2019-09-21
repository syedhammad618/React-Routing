// import React from 'react'

// export default function Navbar() {
//     return (
//         <nav className="nav-wrapper purple darken-5">
//                 <div className="container">
//                     <a  className="brand-logo">PROTO-DROP</a>
//                     <ul className="right">
//                         <li><a href="/">Home</a></li>
//                         <li><a href="/about">About</a></li>
//                         <li><a href="/contact">Contact</a></li>

//                     </ul>
//                 </div>
//         </nav>
//     )
// }

// not reload page using link and navlink

import React from "react";
import { Link, Navlink, withRouter } from "react-router-dom";

// first you import withRouter and  in  you should wrap the function in export i.e withRouter(navbar)

function Navbar(props) {
  // setTimeout(() => {
  //   props.history.push("./Contact");
  // }, 3000);
  return (
    <nav className="nav-wrapper red darken-5">
      <div className="container">
        <a className="brand-logo">PROTO-DROP</a>
        <ul className="right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default withRouter(Navbar);
