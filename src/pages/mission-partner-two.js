import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"



import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero-small"

const MissionPartner2 = () => (
  <Layout>
    <Seo title="Mission / Partner" />
    
    <Hero heroBig="Join Us!"/>

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
          <p>Our goal in partnership with Dare for More is to create an arm of prevention and intervention for women who are 
          impacted by trafficking, abuse and poverty. We will be stepping in to give each woman the opportunity to heal, 
          grow and build sustainable lives for them and their children.</p>
          <p>We have many ways in which we plan to accomplish this goal:</p>
          <p> Currently in Guatemala, property is being secured to build a safe house in which ministry with women/children who have been 
    placed there will begin.</p>
          <p>Our ministry partner is working to find ways to reach distant communities.</p>
          <p>Currently, there is work beginning to build ovens that can be used over a fire so women may cook for their families.</p>
          <p>Pre-natal classes have begun and the first class had more than 50 women with 22 dedicating their life to Christ.</p>
          <p>Current ministry to groups in Ndola, Zambia and the Dominican Republic is ongoing with new training occurring to develop 
            women in order to help them move past their crisis situation to be able to move to productivity and sustainability.</p>
          
            <Link to="https://dareformore.org/" target="_blank" className="flex-item btn btn-secondary bottom-margin-b-20x">
                  Learn More About Dare For More</Link>
        </div>
      </div>
   

    </section>
    
    {/*Hammond Job Function*/}
    <section>
      <div className="img_1082 full-image">
        <div className="mission-goal mission-goal-wrapper">
          <h2>Hammond Family Responsibility</h2>
          <p>We will be working on new tools to raise awareness of Dare For More’s ministry to a greater population, 
              taking teams of people on missions trips in which they can have first-hand experience witnessing what their 
              support accomplishes as well as participating in kingdom building exercises to spread the love of Jesus.</p>
        
            <p>Day to day, our goal will be to build a presence via a YouTube channel and connecting through Facebook and Instagram 
              to keep people connected to the ministry.</p>
      
            <p>We will also continue to fund raise to help to create greater visibility through connecting people to the ministry. 
              Future plans include logistics, development and implementation of various subscription programs to provide sustainability 
              to at risk women (current programs are directed toward coffee that is sourced through Guatemala and is managed by a 
              partner non-profit organization however this may develop into something beyond that).</p>
    
            <p>We will also provide marketing and sale of items made by women who have been rescued and other opportunities 
              as they present themselves.</p> 
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
       
            
           
              <p>That God will provide the funding and ability to fulfill our calling for His Glory.</p>
              <p>For Family Unity as we transition into a missions life.</p>
              <p>God will connect us with Inidividuals that we can help.</p>
           
          </div>


          

          {/* Give */}
          <div className="flex-column-card-2">          
              <h2>Giving</h2>
              <p>One time Gift</p>
              <p>Stock up cost and unexpected expenditures.</p>
          </div>

          {/* Partner */}
          <div className="flex-column-card-2">
              <h2>Partnership</h2>
              
              <p>Monthly support from our partners is what allows us to work full time as Global Representative for DFM.</p>
          </div>

      </div>
    </section>

    {/* Bible Verse*/}
    <section>

      <div className="img_0276 verse-image">
        <div className="mission-flex-verse">
          <p className="mission-verse">Pure and undefiled religion is this: to visit  orphans and widoes in their trouble, and to keep oneself unspotted from the world.
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
