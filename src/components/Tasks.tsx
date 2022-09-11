import React from 'react'

import styles from './Tasks.module.css'

import { InputTask } from './InputTask'
import { WithoutTasks } from './WithoutTasks'

export function Tasks () {
  return (
    <section>

      <InputTask />
      
      <section>
        <header className={styles.headerTasks}>
          <div className={styles.createdTasks}>
            <strong>Taregas criadas</strong><span>0</span>
          </div>
          <div className={styles.completedTasks}>
            <strong>Concluídas</strong><span>0</span>
          </div>
        </header>
        
        <main className={styles.tasksList}>
          <WithoutTasks />
        </main>
      </section>

    </section>
  )
}