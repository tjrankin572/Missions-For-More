import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero-extra-small"

const Bio = () => (
  <Layout>
    <Seo title="Bio" />
    <Hero heroText='Then I heard the voice of the Lord saying, “Whom shall I send? And who will go for us?” And I said, “Here am I. Send me!"' heroCitation="Isaiah 6:8"/>

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
    {/* Kids Bio*/}
    <section>


      
      
    </section>
  </Layout>
)

export default Bio