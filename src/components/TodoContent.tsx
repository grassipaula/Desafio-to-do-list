import { useState } from 'react';
import { CreateTask } from './CreateTask';
import { Task } from './Task';
import { ListInfo } from './ListInfo';

import styles from './TodoContent.module.css';
import ClipBoard from '../assets/Clipboard.svg';

export interface TaskType {
  content: string;
  isChecked?: boolean;
}

export const TodoContent = () => {

  const [tasks, setTask] = useState<TaskType[]>([])

  const isTasksEmpty = tasks.length === 0

  const handleCreateNewTask = (taskContent: string) => {
    const task: TaskType = {
      content: taskContent,
      isChecked: false
    }

    setTask([...tasks, task])
  }

  const handleDeleteTask = (index: number) => {
    const newTasks = tasks.filter((task, taskIndex) => taskIndex !== index)
    setTask(newTasks)
  }

  const handleCheckTask = (index: number) => {
    const checkedTasks = tasks.map((task, taskIndex) => {
      if (taskIndex === index) {
        return {
          content: task.content,
          isChecked: !task.isChecked
        }
      }
      return task
    })
    setTask(checkedTasks)
  }

  return (
    <>
      <CreateTask handleCreateNewTask={handleCreateNewTask} />
      <ListInfo tasks={tasks} />
      <div className={styles.container}>
        {isTasksEmpty && (<div className={styles.emptyBoard}>
          <img src={ClipBoard} alt="clipboard" className={styles.clipboard} />
          <p className={styles.noTask}><strong>Você ainda não tem tarefas cadastradas</strong><br></br>
            Crie tarefas e organize seus itens a fazer</p>
        </div>)}
        {tasks.map((task, index) => <Task handleCheckTask={() => handleCheckTask(index)} task={task} handleDeleteTask={() => handleDeleteTask(index)} />)}
      </div>
    </>
  )
}