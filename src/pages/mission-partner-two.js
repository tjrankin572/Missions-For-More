import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPrayingHands } from '@fortawesome/free-solid-svg-icons'
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons'
import { faHandshake } from '@fortawesome/free-solid-svg-icons'



import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"

const MissionPartner2 = () => (
  <Layout>
    <Seo title="Mission / Partner" />

   
   
    <Hero heroImage="hero-image-two" heroBig="Join Us!"/>

    {/* Ministry Goals Text*/}
    <section>
  
      <div className="img_1082 full-image">
        <div className="mission-goal mission-goal-wrapper">
            <h2>Our Mission</h2>
            <p>Our goal is to intervene in situations of human trafficking and provide relief for those vulnerable to it. 
              Often this relief will be provided by partners in the areas that we are working with. 
              We will be facilitating trips to visit these areas. Mission trips will support sustainability by creating infrastructure 
              in which we can sell hand-made products and other items. 
              Raise visibility by creating content to promote awareness. </p>
            <p>We will accomplish this goal by reaching out to the lives of women and children that have been impacted by poverty, 
              abuse and trafficking. We will provide basic needs (clothing, food and medicine) then provide education and 
              opportunities for these people to move beyond the crisis state into a sustainable occupation.
            </p>
        </div>
      </div>

      
    </section>
    {/* DFM Mission Statement*/}
    <section>
      <div className="img_0785 full-image">
        <div className="mission-goal mission-goal-wrapper">
          <h2>Dare For More</h2>
          <p>Our goal in patnering with Dare for More is to create an arm of prevention and intervention for women who are 
          impacted by trafficking, abuse and poverty. We will be stepping in to give each woman the opportunity to heal, 
          grow and build sustainable lives for them and their children.</p>
         
          
            <Link to="https://dareformore.org/" target="_blank" className="flex-item btn btn-secondary bottom-margin-b-20x">
                  Learn More About Dare For More</Link>
        </div>
      </div>
   

    </section>
    
    {/* Support Information*/}
    <section>
      <div className="flex-row-container">
          <div className="flex-item-full">
            <h2>There are several ways you can support us!</h2>
          </div>
          {/* Prayer */}
          <div className="flex-column-card-2">
              <h2>Prayer</h2>

              <p><FontAwesomeIcon icon={faPrayingHands} size="3x"></FontAwesomeIcon> </p>
           
              <p>That God will provide the funding and ability to fulfill our calling for His Glory.</p>
              <p>For Family Unity as we transition into a missions life.</p>
              <p>God will connect us with Inidividuals that we can help.</p>
           
          </div>


          

          {/* Give */}
          <div className="flex-column-card-2">          
              <h2>Giving</h2>

              <p><FontAwesomeIcon icon={faHandHoldingUsd}  size="3x"></FontAwesomeIcon> </p>

              <p>Help us by providing a one time gift!</p>
              <p>This will help us stock up cost and unexpected expenditures that are related to our mission of providing relief.</p>
          </div>

          {/* Partner */}
          <div className="flex-column-card-2">
              <h2>Partnership</h2>
              
              <p><FontAwesomeIcon icon={faHandshake}  size="3x"></FontAwesomeIcon> </p>


              <p> By providing a monthly gift, our partners can enable us to work full time as Directors of Global Sustainability for Dare For More.</p>
          </div>

      </div>
    </section>

    {/* Bible Verse*/}
    <section>

      <div className="img_0276 verse-image">
        <div className="mission-flex-verse">
          <p className="mission-verse">Pure and undefiled religion is this: to visit orphans and widows in their trouble, and to keep oneself unspotted from the world.
          </p>
          <p className="mission-verse-reference">James 1 :27</p>
          <Link to="https://dareformore.org/" target="_blank" className="nav-link give-bold">
                  Give</Link>
        </div>
      </div> 
    </section>

    
  </Layout>
)

export default MissionPartner2;
