import React from "react"
import styled from "styled-components"

import "./footer.css"

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

const YapbFooter = () => (
  <Footer className="yapb-footer">
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </Footer>
)

export default YapbFooter
