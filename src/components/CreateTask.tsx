import { useState, ChangeEvent, FormEvent } from 'react'

import styles from './CreateTask.module.css';
import plus from '../assets/plus.svg';

interface CreateNewTaskProps {
  handleCreateNewTask: (taskContent: string) => void;
}

export function CreateTask(props: CreateNewTaskProps) {
  const [newTask, setNewTask] = useState('')

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTask(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    if (newTask.length === 0 || !newTask.trim()) {
      return;
    }

    props.handleCreateNewTask(newTask)

    setNewTask('')
  }

  return (
    <>
      <div className={styles.HomePage}>
        <form onSubmit={handleSubmit}>
          <div className={styles.container}>
            <div className={styles.createTaskContainer}>
              <input
                className={styles.HomePageInput}
                type="text"
                placeholder='Adicione uma nova tarefa'
                value={newTask}
                onChange={handleNewTaskChange}
                required />

              <button
                className={styles.FormButton}
                type='submit'>
                <strong>Criar</strong>
                <img src={plus} alt="plus" className={styles.buttonPlus} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}