import styles from './ListInfo.module.css';
import { TaskType } from './TodoContent';

interface ListInfoProps {
  tasks: TaskType[]
}

export function ListInfo({ tasks }: ListInfoProps) {
  return (
    <>
      <div className={styles.info}>
        <div className={styles.container}>
          <div className={styles.createdContainer}>
            <div className={styles.created}>
              <strong>Tarefas criadas</strong>
            </div>
            <div className={styles.quantity}><strong>{tasks.length}</strong></div>
          </div>
          <div className={styles.concludedContainer}>
            <div className={styles.concluded}>
              <strong>Concluídas</strong>
            </div>
            <div className={styles.quantity}> <strong>{tasks.length > 0 ? (<>{tasks.filter((task) => task.isChecked).length} de {tasks.length}</>) : tasks.length}</strong></div>
          </div>
        </div>
      </div>
    </>
  )
}