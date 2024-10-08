import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import './global.css';
import { Post } from "./components/Post";

export function App() {
return (
  <div>
    <Header/>
    <div className={styles.wrapper}>
      <aside>
        <Sidebar/>
      </aside>
      <main>
        <Post/>
        <Post/>
      </main>
    </div>
  </div>
  )
}