import * as React from "react"
import { Link } from "gatsby"
import "../styles/footer.module.css"

const Footer = () => (
  <footer>
    <br></br>
    <nav>
          
          <Link to="https://dareformore.org/" target="_blank">
                Dare For More</Link>
          <Link to="https://dareformore.org/donate/" target="_blank">
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
