import * as React from "react"
import PropTypes from "prop-types"
import * as styles from "../styles/header.module.css"
import { Link } from "gatsby"




const Header = ({ siteTitle }) => (
  <header>
    <div
      
    >
      <h1>
        <Link
          to="/"
          style={{
           
            textDecoration: `none`,
          }}

          className={styles.title}
          
        >
          {siteTitle}
        </Link>
      </h1>

      <nav className="hero_nav">
          <Link to="/" >
                Home</Link>
          <Link to="/mission-partner" >
                Mission/Partner</Link>
          <Link to="/bio" >
                About Us</Link>
    </nav>
       
    </div>
    
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
