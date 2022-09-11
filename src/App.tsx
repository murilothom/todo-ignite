import React from 'react'

import './global.css'
import styles from './App.module.css'

import { Header } from './components/Header'
import { Tasks } from './components/Tasks'

export function App() {
  return (
    <main className={styles.wrapper}>
      <Header />
      <Tasks />
    </main>
  )
}
