import * as React from "react"
import { Link } from "gatsby"
import "../styles/footer.module.css"

const Footer = () => (
  <footer>
    <br></br>
    <nav>
          
          <Link to="https://dareformore.org/" target="_blank" className="flex-item btn btn-secondary nav-btn">
                Dare For More</Link>
          <Link to="https://dareformore.kindful.com/" target="_blank" className="flex-item btn btn-secondary nav-btn">
                Give!</Link>

    </nav>

    <p>"...But as for me and my household, we will serve the Lord."</p>
    <p>Joshua 24:15</p>
  </footer>
)
/*
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
*/
export default Footer
