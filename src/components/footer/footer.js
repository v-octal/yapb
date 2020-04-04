import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import IconLink from "./footer-icon-link"

import "./footer.css"

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

const YapbFooter = () => {
  const { pagesYaml } = useStaticQuery(
    graphql`
      query {
        pagesYaml {
          links {
            color
            fabIconClass
            link
            name
          }
        }
      }
    `
  )
  const footerLinks = pagesYaml.links

  const items = footerLinks.map(row => {
    return (
      <IconLink
        hoverColor={row.color}
        fabIconClass={row.fabIconClass}
        link={row.link}
      ></IconLink>
    )
  })

  return (
    <Footer className="yapb-footer">
      <small className="text-muted mb-2">
        <i className="fas fa-code"></i> with <i className="fas fa-heart"></i> by{" "}
        <strong>geekyJock</strong>
      </small>
      <div className="yapb-footer-links">{items}</div>
    </Footer>
  )
}

export default YapbFooter
