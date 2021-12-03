import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBullhorn } from '@fortawesome/free-solid-svg-icons'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'
import { faTshirt } from '@fortawesome/free-solid-svg-icons'

const Bio = () => (
  <Layout>
    <Seo title="Bio" />
    <Hero heroImage="hero-image-three" heroText='Then I heard the voice of the Lord saying, “Whom shall I send? And who will go for us?” And I said, “Here am I. Send me!"' heroCitation="Isaiah 6:8"/>


     {/*Hammond Job Function*/}
     <section>
      <div className="img_2576 bio-full-image">
        <div className="mission-goal mission-goal-wrapper">
          <h2>Hammond Family Responsibility</h2>
          <p><FontAwesomeIcon icon={faSeedling} size="3x"></FontAwesomeIcon> </p>
          <p>We will be working on new tools to raise awareness of Dare For More’s ministry to a greater population, 
              taking teams of people on missions trips in which they can have first-hand experience witnessing what their 
              support accomplishes as well as participating in kingdom building exercises to spread the love of Jesus.</p>
        
              <p><FontAwesomeIcon icon={faBullhorn} size="3x"></FontAwesomeIcon> </p>
            <p>Day to day, our goal will be to build a presence via a YouTube channel and connecting through Facebook and Instagram 
              to keep people connected to the ministry. We will also continue to fund raise and create greater visibility through connecting people to the ministry. 
              Future plans include logistics, development and implementation of various subscription programs to provide sustainability 
              to at risk women (current programs are directed toward coffee that is sourced through Guatemala and is managed by a 
              partner non-profit organization however this may develop into something beyond that).</p>
              <p><FontAwesomeIcon icon={faTshirt} size="3x"></FontAwesomeIcon> </p>
            <p>We will also provide marketing and sale of items made by women who have been rescued and other opportunities 
              as they present themselves.</p> 
          </div>
        </div>
    </section>
    
    {/* Pictures*/}
    <section>
      <div className="flex-bio-row-container">
        

        <div className="flex-column-card-bio">
          <h2 className="flex-item">Quick Introduction</h2>
          <p className="flex-item">Dave and Ruth were called out of a successful General Contracting business to begin serving the Lord 
          in a new way. Ruth began full-time work supporting the family while Dave completed an Associates degree in 
          Christian Counseling. After that, there was a waiting period while God orchestrated the events that would lead 
          Dave to meet Dare for More and ignite a passion in Ruth to serve in ministry with Dave in 
          partnership with Dare for More.</p>
          <p className="flex-item">We are eager to step out in this new endeavor. We are excited to work together, 
          to serve God together and touch the lives of the people He loves.</p>
        </div>
        <div className="flex-column-card-bio">
            <StaticImage src="../images/Family_Union_Pacific.jpg" className="image-object-fill" objectPosition="right bottom"/> 
        </div>
        <div className="flex-column-card-bio">
          <StaticImage src="../images/Cassie_Gideon_reduced.jpg" className="image-object-fill"/>
        </div>
        <div className="flex-column-card-bio">
          <h2 className="flex-item">Our Kids</h2>
          <div className="flex-item">
              <h3>Kassia</h3>
              <p >Kassia is a sweet 16 year old who loves her family. 
              She is very creative, always doing fun arts and crafts, loves to read and is quite tenacious. 
              Find people in tough situations and pouring the Love of God on them.</p>
          </div>
          <div className="flex-item">
              <h3>Gideon</h3>
              <p >Gideon is our 13 year old. He is scientific minded yet very creative.  
              He likes all forms of communication, video games and especially likes to involve his friends and family in his gaming 
              adventures.</p>
          </div>
        </div>
      </div>

       
    </section>
  </Layout>
)

export default Bio