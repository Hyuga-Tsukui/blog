import React from "react"
import { Link } from "gatsby"

export const BlogPostCard = props => {
  const { title, slug, postedDate, description } = props
  return (
    <article className="card">
      <header>
        <h2>
          <Link to={slug} itemProp="url">
            <span itemProp="headline">{title}</span>
          </Link>
        </h2>
        <small>{postedDate} 公開</small>
      </header>
      <section>
        <p itemProp="description">{description}</p>
        <small>
          <Link to={slug}>全文を読む</Link>
        </small>
      </section>
    </article>
  )
}
