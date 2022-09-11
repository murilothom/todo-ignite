import React from 'react'

import { PlusCircle } from 'phosphor-react'

import styles from './InputTask.module.css'

export function InputTask () {
  return (
    <form className={styles.contentInput}>
      <input
        className={styles.input}
        placeholder="Adicione uma nova tarefa"
        type="text"
      />
      <button
        className={styles.button}
      >
        Criar
        <PlusCircle size={18} />
      </button>
    </form>
  )
}