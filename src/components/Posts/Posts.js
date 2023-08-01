import React from "react";

import {placeholderService} from "../../services/placeholderService/placeholderService";
import {Post} from "./Post/Post";
import styles from './Posts.module.css';
class Posts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        placeholderService.getPosts().then(({data}) => this.setState(({posts: data})));
    }

    render() {
        return(
            <div>
                <h2 className={styles.title}>Posts</h2>
                <div className={styles.posts}>
                    {this.state.posts.map(post => <Post post={post} key={post.id} />)}
                </div>
            </div>
        )
    }
}

export {Posts}