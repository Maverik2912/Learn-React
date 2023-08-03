import {useFetch} from "../../hooks/useFetch";
import {Users} from "../Users/Users";
import {Comments} from "../Comments/Comments";
import {Posts} from "../Posts/Posts";
import {useNavigation} from "react-router-dom";

const UseFetchComponent = () => {
    const users = useFetch('/users');
    const comments = useFetch('/comments');
    const posts = useFetch('/posts');

    return (
        <div>
            <Users users={users} />
            <Comments comments={comments} />
            <Posts posts={posts} />
        </div>
    );
};

export {UseFetchComponent};