import { CreateTask } from './components/CreateTask';
import { Header } from './components/Header';
import { TodoContent } from './components/TodoContent';

import './global.css';

export function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <TodoContent />
      </main>
    </div>
  )
}


