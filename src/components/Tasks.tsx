import React from 'react'

import { InputTask } from './InputTask'

export function Tasks () {
  return (
    <section>

      <InputTask />
      
      <article>
        <header>
          <div>
            <strong>Taregas criadas</strong> <span>0</span>
          </div>
          <div>
            <strong>Concluídas</strong> <span>0</span>
          </div>
        </header>
        
        <main>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </main>
      </article>

    </section>
  )
}