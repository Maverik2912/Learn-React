import {Post} from "./Post/Post";
import styles from './Posts.module.css';

const Posts = ({posts}) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Posts</h2>
            <div className={styles.posts}>
                {posts && posts.map(post => <Post key={post.id} post={post} />)}
            </div>
        </div>
    );
};

export {Posts};