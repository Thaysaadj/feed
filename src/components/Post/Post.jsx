// props
import { useState } from 'react'
import { Avatar } from '../Avatar/Avatar'
import { Comentario } from '../Comentario/Comentario'
import styles from './Post.module.css'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

/** Quais são todas as informações que variam de usuário para usuário */
/** author: {avatar_url: "", name: "", reponsabilite: ""} dados do autor*/
/**publishedAt : Date * data da publicação*/
/**content: String  conteúdo do post*/

const comments = [
  1, 2
]

export function Post({ author, publishedAt, content }) {

  const [comments, setComments] = useState(['Post muito bacatan, hein ?!']);
  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h' ", {
    locale: ptBR,
  })

  const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })
  //Função que Cria um comentário
  function handleCreateNewComment() {
    event.preventDefault()

    setComments([...comments, newCommentText])

    setNewCommentText('')

  }
  // Função que pega o valor do input e guarda no estado que vai criar um novo comentário
  function handleNewCommentChange() {
    setNewCommentText(event.target.value)
  }

  return (
    <article className={styles.post} >
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={line.content}><a href='#'>{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <stong>Deixe seu feedback</stong>

        <textarea
          name='comment'
          value={newCommentText}
          placeholder='Deixe um comentário'
          onChange={handleNewCommentChange}
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comentario
            key={comment}
            content={comment}
          />
        })}
      </div>

    </article>
  )
}
