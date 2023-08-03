import {Comment} from "./Comment/Comment";
import styles from './Comments.module.css';

const Comments = ({comments}) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Comments</h2>
            <div className={styles.comments}>
                {comments && comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        </div>
    );
};

export {Comments};