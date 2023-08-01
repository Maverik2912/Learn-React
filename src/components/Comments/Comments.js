import React from "react";

import {placeholderService} from "../../services/placeholderService/placeholderService";
import {Comment} from "./Comment/Comment";
import styles from './Comments.module.css';
class Comments extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        placeholderService.getComments().then(({data}) => this.setState(({comments: data})));
    }

    render() {
        return (
            <>
              <h2 className={styles.title}>Comments</h2>
              <div className={styles.comments}>
                  {this.state.comments.map(comment => <Comment comment={comment} key={comment.id} />)}
              </div>
            </>
        )
    }
}

export {Comments};