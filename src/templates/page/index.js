import React from 'react'
import Helmet from 'react-helmet'
import styles from './styles.module.css';
import Header from '../../components/Header'
import ColumnContainer from '../../components/ColumnContainer'

const isNotBlank = str => {
    return !(/^\s*$/.test(str));
}

export default function Template({ data, pathContext }) {
  const { markdownRemark: post } = data

  return (
    <div className={styles.root}>
      <Helmet
        title={`${post.frontmatter.title}${isNotBlank(data.site.siteMetadata.title) ? (' – ' + data.site.siteMetadata.title) : ''}`}
      />
      <div
        className={`header ${post.frontmatter.style}`}
      >
        <Header />
      </div>
      <ColumnContainer>
        <div
          className={`content ${post.frontmatter.style}`}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </ColumnContainer>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        style
      }
    }
  }
`
