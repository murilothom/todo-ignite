import React from 'react'

export function Tasks () {
  return (
    <section>

      <form>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button type="button">Criar</button>
      </form>
      
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