import React from "react"
import { Link } from "gatsby"

import "./pagination.css"

const YapbPagination = props => {
  let items = []
  for (let i = 1; i <= props.numPages; i++) {
    const currPage = i === 1 ? "" : i
    if (i === props.currentPage) {
      items.push(<a className="pagination-elem-inactive">{i}</a>)
    } else {
      items.push(
        <Link
          to={`/${props.layout}/${currPage}`}
          className="pagination-elem-active"
        >
          {i}
        </Link>
      )
    }
  }

  const firstPage =
    props.currentPage === 1 ? (
      <a className="pagination-elem-inactive">&laquo;</a>
    ) : (
      <Link to={`/${props.layout}/`} className="pagination-elem-active">
        &laquo;
      </Link>
    )
  const lastPage =
    props.currentPage === props.numPages ? (
      <a className="pagination-elem-inactive">&raquo;</a>
    ) : (
      <Link
        to={`/${props.layout}/${props.numPages}/`}
        className="pagination-elem-active"
      >
        &raquo;
      </Link>
    )

  return (
    <div className="yapb-pagination-wrapper">
      <div className="yapb-pagination">
        {firstPage}
        {items}
        {lastPage}
      </div>
    </div>
  )
}

export default YapbPagination
