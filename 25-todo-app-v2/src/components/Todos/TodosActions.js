import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import Button from '../Button/Button'
import styles from './TodosActions.module.css'

function TodosActions({
  resetTodos,
  deleteComplitedTodos,
  complitedTodosExist,
}) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Delete Complited Todos"
        onClick={deleteComplitedTodos}
        disabled={!complitedTodosExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  )
}

export default TodosActions
