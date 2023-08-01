import React from "react";
class Comment extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        const {postId, id, name, email, body} = this.props.comment;

        return (
        <div>
            <p><b>PostId:</b> {postId}</p>
            <p><b>Id:</b>{id}</p>
            <p><b>Name:</b> {name}</p>
            <p><b>Email:</b> {email}</p>
            <p><b>Body:</b> {body}</p>
        </div>
        )
    }
}

export {Comment};