import * as React from "react"
import PropTypes from "prop-types"
import  "../styles/global.css"

import { Link } from "gatsby"

const Hero = ({heroText, heroCitation, heroBig}) => (
    <section>
      <div className="hero-flex-container">

        

        <div className="hero-image-two">
            <nav className="hero_nav flex-1">
                <div>
                    <Link to="/" className="nav-link">
                            Home</Link>
                </div>
                <div>
                    <Link to="/mission-partner-two" className="nav-link">
                            Mission/Partner</Link>
                </div>
                <div>
                    <Link to="/bio" className="nav-link">
                            About Us</Link>
                </div>
            </nav>

            <div className="flex-3">
                <p className="hero_text">{heroText}</p>
                <br></br>
                <p className="hero_text hero-text-bold">{heroCitation}</p>
                <br></br>
                <p className="hero-big-text hero-text-bold">{heroBig}</p>
            </div>
        </div> 
      </div>
    
    </section>
)



export default Hero;