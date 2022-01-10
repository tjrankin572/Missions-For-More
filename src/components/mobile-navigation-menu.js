import * as React from "react"
import PropTypes from "prop-types"
import  "../styles/global.css"
import styled from "styled-components"

import { Link } from "gatsby"

const MenuIcon = styled.button`
    position: fixed;
    top: 2rem;
    right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 1.8rem;
    height: 2.0rem;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 5;
    
    div {
        width: 1.6rem;
        height: 0.2rem;
        background: black;
        border-radius: 5px;
        transform-origin: 3px;
        position: relative;
    }
`

const MenuLinks = styled.nav`
    position: fixed;

`

const MobileNavigationMenu = () => (
    <section>
        <MenuIcon>
            <div />
            <div />
            <div />
        </MenuIcon>

        <MenuLinks>

        </MenuLinks>
    </section>
)
 
export default MobileNavigationMenu