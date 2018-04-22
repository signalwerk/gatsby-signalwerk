import React from 'react'
import Link from 'gatsby-link'
import ColumnContainer from '../ColumnContainer'
import styles from './styles.module.css';

const Header = () => (
  <div className={styles.root}>
    <ColumnContainer>
          <Link to="/">
            → Home
          </Link>
    </ColumnContainer>
  </div>
)

export default Header
