import React from 'react'
import Helmet from 'react-helmet'
import styles from './styles.module.css'
import Header from '../../components/Header'
import ColumnContainer from '../../components/ColumnContainer'

const isNotBlank = str => {
  return !/^\s*$/.test(str)
}

export default function Template({ data, pathContext }) {
  const { markdownRemark: post } = data
  const { menu } = data

  return (
    <div className={styles.root}>
      <Helmet
        title={`${post.frontmatter.title}${
          isNotBlank(data.site.siteMetadata.title)
            ? ' – ' + data.site.siteMetadata.title
            : ''
        }`}
      />
      <div className={styles.header}>
        <div className={`header ${post.frontmatter.style}`}>
          <Header menu={menu} active={post.fields.slug} />
        </div>
      </div>
      <div className={styles.content}>
        <ColumnContainer>
          <div
            className={`content ${post.frontmatter.style}`}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </ColumnContainer>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    menu: allMarkdownRemark(filter: { frontmatter: { menu: { eq: true } } }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }

    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        style
      }
    }
  }
`
