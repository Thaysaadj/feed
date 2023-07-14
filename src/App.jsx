
import { Header } from './components/Header/Header'
import { Post } from './components/Post/Post'
import { Sidebar } from './components/Sidebar/Sidebar'
import styles from './App.module.css'
import './global.css'

export function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            author="Thayna Saad"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo necessitatibus nesciunt expedita reiciendis eveniet? Tempora consequatur, dignissimos, in aliquam ducimus saepe nobis id doloribus magni at atque? Est, rem in."
          />
          <Post
            author="Gabriel"
            content="Muito Legal"
          />
        </main>
      </div>
    </>
  )
}

