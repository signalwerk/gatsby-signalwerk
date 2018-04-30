import React from 'react'
import Link from 'gatsby-link'
import ColumnContainer from '../ColumnContainer'
import styles from './styles.module.css'

const Header = ({ menu, active }) => (
  <div className={styles.root}>
    <ColumnContainer>
      <ul>
        <li>
          {(menu &&
            menu.edges.map(item => (
              <Link
                key={item.node.id}
                className={`${
                  active === item.node.fields.slug ? 'current' : 'normal'
                }`}
                to={item.node.fields.slug}
              >
                {item.node.frontmatter.title}
              </Link>
            ))) || <Link to="/">Home</Link>}
        </li>
      </ul>
    </ColumnContainer>
  </div>
)

export default Header
