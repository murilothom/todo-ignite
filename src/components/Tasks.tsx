import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import styles from './Tasks.module.css'

import { InputTask } from './InputTask'
import { WithoutTasks } from './WithoutTasks'
import { TaskList } from './TaskList'

interface Task {
  id: string;
  title: string;
  isComplete: boolean;
}

interface TaskProps {
  tasks: Task[]
}

export function Tasks () {
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      isComplete: false,
    },
    {
      id: uuidv4(),
      title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      isComplete: false,
    },
    {
      id: uuidv4(),
      title: 'Estudar JavaScript',
      isComplete: true,
    },
  ])

  return (
    <section>

      <InputTask />
      
      <article>
        <header className={styles.headerTasks}>
          <div className={styles.createdTasks}>
            <strong>Tarefas criadas</strong><span>0</span>
          </div>
          <div className={styles.completedTasks}>
            <strong>Concluídas</strong><span>0</span>
          </div>
        </header>
        
        <main className={styles.tasksList}>
          {tasks.length === 0 
            ? <WithoutTasks />
            : <ul>{(tasks.map(task => (
                <TaskList key={task.id} task={task} />
              )))}
              </ul>
          }
        </main>
      </article>

    </section>
  )
}