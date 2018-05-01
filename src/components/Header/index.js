import React from 'react'
import Link from 'gatsby-link'
import ColumnContainer from '../ColumnContainer'
import styles from './styles.module.css'

const Header = ({ menu, active }) => (
  <div className={styles.root}>
    <ColumnContainer>
    <div className="content">
      <div className="centerColumn">
          <ul>
            {(menu &&
              menu.edges.sort((a, b) => a.node.frontmatter.title.localeCompare(b.node.frontmatter.title)).map(item => (
                <li>
                  <Link
                    key={item.node.id}
                    className={`${
                      active === item.node.fields.slug ? 'current' : 'normal'
                    }`}
                    to={item.node.fields.slug}
                  >
                    {item.node.frontmatter.title.replace(/^[0-9]*--/,'')}
                  </Link>
                </li>
              ))) || (
              <li>
                <Link to="/">Home</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </ColumnContainer>
  </div>
)

export default Header
