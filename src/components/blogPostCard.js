import React from "react"
import { Link } from "gatsby"

export const BlogPostCard = props => {
  const { title, slug, postedDate, description } = props
  return (
    <article className="card">
      <Link to={slug} itemProp="url">
        <header>
          <h2>
            <span itemProp="headline">{title}</span>
          </h2>
          <small>{postedDate} 公開</small>
        </header>
        <section>
          <p itemProp="description">{description}</p>
        </section>
      </Link>
    </article>
  )
}
