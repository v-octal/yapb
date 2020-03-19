import React from "react"
import styled from "styled-components"
import IconLink from "./footer-icon-link"

import "./footer.css"

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

const YapbFooter = () => (
  <Footer className="yapb-footer">
    <small className="text-muted mb-2">
      <i className="fas fa-code"></i> with <i className="fas fa-heart"></i> by{" "}
      <strong>Vikas Rajput</strong>
    </small>
    <div className="yapb-footer-links">
      <IconLink
        hoverColor="rgb(29, 191, 242)"
        fabIconClass="fab fa-twitter"
        link="www.twitter.com/geekyjock"
      ></IconLink>
      <IconLink
        hoverColor="#db4437"
        fabIconClass="fas fa-envelope"
        link="#"
      ></IconLink>
    </div>
  </Footer>
)

export default YapbFooter
