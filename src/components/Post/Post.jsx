// props
import styles from './Post.module.css'
export function Post(props) {
  return (
    <article className={styles.post} >
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://media.licdn.com/dms/image/D4D03AQEtQb6OMmT9YA/profile-displayphoto-shrink_800_800/0/1677280638914?e=1694649600&v=beta&t=IHCrLEQnr3W7XSgHX2uGmAbRxV8KxjL_pR_8RYy6QQI" />
          <div className={styles.authorInfo}>
            <strong>Thayna</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time dateTime='2023-05-11 08:13:30' title='13 de Julho as 17:15'>
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p>👉 jane.design/doctorcare</p>

        <p><a href='#'>#novoprojeto</a> <a href='#'>#nlw</a> <a href='#'>#rocketseat</a></p>
      </div>

    </article>
  )
}
