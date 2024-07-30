import {Post} from "./Post"
import { Header } from "./components/Header"
import './global.css'

export function App() {
return (
  <div>
    <Header/>
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
  </div>
  )
}