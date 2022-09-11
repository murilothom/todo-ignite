import React from 'react'

import styles from './WithoutTasks.module.css'

import Clipboard from '../assets/clipboard.svg'

export function WithoutTasks () {
  return (
    <article className={styles.container}>
      <img src={Clipboard} alt="Prancheta" />
      <div>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </article>
  )
}