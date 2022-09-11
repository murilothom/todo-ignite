import React, { FormEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import styles from './Tasks.module.css'

import { PlusCircle } from 'phosphor-react'

import { WithoutTasks } from './WithoutTasks'
import { TaskList } from './TaskList'

interface Task {
  id: string;
  title: string;
  isComplete: boolean;
}

export function Tasks () {
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState<Task[]>([])
  const [tasksCompleted, setTasksCompleted] = useState(0)

  function handleAddNewTask (event: FormEvent) {
    event.preventDefault()

    const newTaskToAdd = {
      id: uuidv4(),
      title: newTask,
      isComplete: false
    }
    newTask.length > 0 &&
    setTasks([...tasks, newTaskToAdd])
    setNewTask('')
  }

  function handleClickTask (id: string) {
    const newTaskListWithCompleteOne = tasks.map(task => {
      if (task.id === id) 
        return {...task, isComplete: !task.isComplete}
      else
        return task
    })
    setTasks(newTaskListWithCompleteOne)

    const tasksCompletedLength = newTaskListWithCompleteOne.reduce((ac, task) => {
      if (task.isComplete === true)
        return ac + 1
      else 
        return ac
    }, 0)
    setTasksCompleted(tasksCompletedLength)
  }

  function handleDeleteTask (id: string) {
    const newTaskListWithCompleteOne = tasks.filter(task => task.id !== id)
    setTasks(newTaskListWithCompleteOne)
    const tasksCompletedLength = newTaskListWithCompleteOne.reduce((ac, task) => {
      if (task.isComplete === true)
        return ac + 1
      else 
        return ac
    }, 0)
    setTasksCompleted(tasksCompletedLength)
  }

  return (
    <section>
      <form
        onSubmit={handleAddNewTask}
        className={styles.contentInput}
      >
        <input
          className={styles.input}
          placeholder="Adicione uma nova tarefa"
          type="text"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
        />
        <button
          className={styles.button}
        >
          Criar
          <PlusCircle size={18} />
        </button>
      </form>
      
      <article>
        <header className={styles.headerTasks}>
          <div className={styles.createdTasks}>
            <strong>Tarefas criadas</strong><span>{tasks.length}</span>
          </div>
          <div className={styles.completedTasks}>
            <strong>Concluídas</strong><span>{tasks.length === 0 ? '0' : `${tasksCompleted} de ${tasks.length}`}</span>
          </div>
        </header>
        
        <main className={styles.tasksList}>
          {tasks.length === 0 
            ? <WithoutTasks />
            : <ul>{(tasks.map(task => (
                <TaskList 
                  key={task.id}
                  task={task}
                  onHandleClickTask={handleClickTask}
                  onHandleDeleteTask={handleDeleteTask}
                />
              )))}
              </ul>
          }
        </main>
      </article>

    </section>
  )
}