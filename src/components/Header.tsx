import React from 'react'

import styles from './Header.module.css'

import Rocket from '../assets/rocket.svg'

export function Header () {
  return (
    <header className={styles.header}>
      <img src={Rocket} alt="Foguete" />
      <h1 className={styles.title}>to<span>do</span></h1>
    </header>
  )
}