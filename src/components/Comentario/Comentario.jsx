import { Avatar } from '../Avatar/Avatar'
import styles from './Comentario.module.css'
import {Trash, ThumbsUp} from 'phosphor-react'

export function Comentario() {
  return (
    <div className={styles.comment}>
      <Avatar src='https://media.licdn.com/dms/image/D4D03AQEtQb6OMmT9YA/profile-displayphoto-shrink_800_800/0/1677280638914?e=1694649600&v=beta&t=IHCrLEQnr3W7XSgHX2uGmAbRxV8KxjL_pR_8RYy6QQI' 
        hasBorder={false}
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Thayna Saad</strong>
              <time dateTime='2023-05-11 08:13:30' title='13 de Julho as 17:15'>
                Cerca de 1h atrás
              </time>
            </div>

            <button title='Deletar comentário'> 
              <Trash size={24}/>
            </button>
          </header>
          <p>
            Muito bom Devon, pravéns !!
          </p>
        </div>
        <footer>
          <button>
            <ThumbsUp/>
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>

    </div>
  )
}