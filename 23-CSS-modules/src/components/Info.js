import './Info.css'
import styles from './Info.module.css'

function Info() {
  return (
    <div className={styles.info}>
      <h1>Hello from the Info component</h1>
      <button className={styles.myOtherButton}>
        Click me in the Info component
      </button>
    </div>
  )
}

export default Info
