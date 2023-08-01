import React from "react";

class Post extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
            const {userId, id, title, body} = this.props.post;
            return (
                <div>
                    <p><b>UserId:</b> {userId}</p>
                    <p><b>Id:</b> {id}</p>
                    <p><b>Title:</b> {title}</p>
                    <p><b>Body:</b> {body}</p>
                </div>
            )
    }
}

export {Post}