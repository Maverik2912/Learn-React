import {User} from "./User/User";
import styles from './Users.module.css';
const Users = ({users}) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Users</h2>
            <div className={styles.users}>
                {users && users.map(user => <User key={user.id} user={user} />)}
            </div>
        </div>
    );
};

export {Users};