import * as React from "react"
import PropTypes from "prop-types"
import  "../styles/global.css"

import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Hero = ({heroText, heroCitation, heroBig, heroImage}) => (
    
    <section>
 
    
      <div className="mobile-container">
                <Link to="/" className="logo">Missions For More</Link>
                <label for="toggle" class="hamburger"><FontAwesomeIcon icon={faBars}  size="2x"></FontAwesomeIcon></label>

                <input type="checkbox" id="toggle" value="checked"></input>
                <div class="nav-mobile">
                    <br></br>
                    <nav>
                        <ul>
                        <Link to="/" >Home</Link>
                        <Link to="/mission-partner-two" >Mission/Partner</Link>
                        <Link to="/bio">About Us</Link>
                        </ul>
                    </nav>
                </div>
                
      </div>
      <div className="hero-flex-container">

       
        <div className={heroImage}>
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