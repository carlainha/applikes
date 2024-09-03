import {Post} from "./Post";
import { Header } from "./components/Header";

import styles from "./App.module.css";

import './global.css';
import { Sidebar } from "./components/Sidebar";

export function App() {
return (
  <div>
    <Header/>
    <div className={styles.wrapper}>
      <aside>
        <Sidebar/>
      </aside>
      <main>
        <Post 
          author="Machado de Assis"
          coment="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, nesciunt. Explicabo voluptate minima libero aperiam velit autem,
          voluptatibus quasi dicta tempora sequi labore dolore, voluptatem distinctio corrupti officiis optio quas!"/>
        <Post 
          author="Clarice Lispector"
          coment="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, nesciunt. Explicabo voluptate minima libero aperiam velit autem,
          voluptatibus quasi dicta tempora sequi labore dolore, voluptatem distinctio corrupti officiis optio quas!"/>
        <Post 
          author="Jane Austin"
          coment="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, nesciunt. Explicabo voluptate minima libero aperiam velit autem,
          voluptatibus quasi dicta tempora sequi labore dolore, voluptatem distinctio corrupti officiis optio quas!"/>
      </main>
    </div>
  </div>
  )
}