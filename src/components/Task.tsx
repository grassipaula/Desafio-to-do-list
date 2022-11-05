import trashLogo from '../assets/trash.svg'
import checkboxUnchecked from '../assets/checkbox-unchecked.svg'
import checkboxChecked from '../assets/checkbox-checked.svg'
import { TaskType } from './TodoContent';
import styles from './Task.module.css';

interface TaskProps {
  task: TaskType;
  handleDeleteTask: () => void
  handleCheckTask: () => void
}

export function Task(props: TaskProps) {
  const randomId = "taskId" + Math.random().toString(16).slice(2)
  return (
    <div className={styles.taskContainer}>
      <input
        className={styles.taskInputCheckbox}
        type="checkbox"
        checked={props.task.isChecked}
        onClick={props.handleCheckTask}
        name="taskCheckbox"
        id={randomId}
      />

      <label htmlFor={randomId}>
        <img src={props.task.isChecked ? checkboxChecked : checkboxUnchecked} alt="checkbox" />
      </label>

      <label className={`${styles.taskLabel} ${props.task.isChecked && styles.taskLabelChecked}`} htmlFor={randomId}>
        {props.task.content}
      </label>

      <button type="button" id="deleteTask" name="deleteTask" onClick={props.handleDeleteTask}><img src={trashLogo} alt="trashLogo"
      /></button>
    </div>
  );
} 