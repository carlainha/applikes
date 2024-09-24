import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';

export function Comment(){
    return(
        <div className={styles.comment}>
            <img src="https://github.com/carlainha.png" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Caroline Radichi</strong>
                            <time title="10 de setembro às 09:44h" dateTime="2024/09/10 09:44:00">Há 1h atrás</time>
                        </div>
                        <button title='Excluir Comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Muito bem Caroline, Parabéns !!!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp size={20}/>
                        Curtir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}