import styles from './Header.module.css';

import rocketLogo from '../assets/rocket.svg';
import todoLogo from '../assets/todo.svg';

export function Header() {
  return (

    <div className={styles.header}>
      <div className={styles.rocketLogo}><img src={rocketLogo} alt="rocketLogo" /></div>
      <div className={styles.todoLogo}><img src={todoLogo} alt="todoLogo" /></div>
    </div>
  )
}