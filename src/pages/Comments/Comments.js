import React, {useEffect, useState} from 'react';
import {commentsService} from "../../services/commentsService/commentsService";
import Comment from "./Comment/Comment";
import styles from './Comments.module.css';
import {useNavigate} from "react-router-dom";
import {links} from "../../constants/links/links";

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getAll()
            .then(({data}) => setComments(data));
    }, []);

    const navigate = useNavigate();
    const moveToPost = id => {
        navigate(`${links.POSTS}/${id}`);
    }

    return (
        <>
            <h1 className={styles.title}>Comments List</h1>
            <div className={styles.container}>
                {comments.map(comment => <Comment key={comment.id} comment={comment} moveToPost={moveToPost}/>)}
            </div>
        </>
    );
};

export default Comments;