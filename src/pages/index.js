import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import MobileNavigationMenu from "../components/mobile-navigation-menu"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import "../styles/global.css"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
  
    <Hero heroImage="hero-image" heroText="Human Trafficking includes the use of force, fraud, or coercion to obtain some type of Labor or Commercial Sex Act." heroCitation="Homeland Security"/>
        
    <section>
      
      <div className="flex-row-container">
        <div className="flex-item-full">
          <h2>Our Family</h2>
        </div>
  

        <div className="flex-column-card">
          <StaticImage src="../images/SDH_8427_reduced.jpg" className="family_img" objectPosition="right top"/>
        </div>

        <div className="flex-column-card">
          <h2 className="flex-index-item"> Our Calling</h2>

          <div className="flex-index-item">
              <p>Finding people in tough situations and pouring the Love of God on them.</p>
              <p>We've partnered with Dare For More to help make that calling a reality.</p>
          </div>
          <div className="flex-index-item">
              <Link to="/bio" className="btn btn-secondary">
                        About Our Family</Link>
          </div> 
        </div>

      </div>
    </section>
    {/* Dare For More*/}
    
    <section>

    <div className="flex-row-container">

      <div className="flex-item-full-dfm">
        <StaticImage src="../images/DFM_Identity.png" className="img-DFM-logo"/>
      </div>

      <div className="flex-item-full">
        
        <p className="dfm-text">At Dare For More the goal is to bring hope and healing to women and girls who may be in danger of or are involved in trafficking due to 
          poverty, abuse or a lack of opportunity. As Directors of Global Sustainability we will be helpers by leading trips, building awareness and connecting needs to funds.
        </p>
        <p>Learn More About Our Ministry Partner</p>
        <Link to="https://dareformore.org/" target="_blank" className="flex-item btn btn-secondary bottom-margin-b-20x">
                  Dare For More</Link>
        
      </div>


    </div>
    </section>

    

  </Layout>
)

export default IndexPage
