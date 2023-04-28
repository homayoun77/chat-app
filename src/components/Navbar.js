import React from 'react'

import styles from './Navbar.module.css'

function Navbar({logoutHandler}) {
  return (
    <div className={styles.container}>
        <div className={styles.name}>Homagram</div>
        <div className={styles.logout} onClick={logoutHandler}>Logout</div>
    </div>
  )
}

export default Navbar