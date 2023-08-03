const Comment = ({comment}) => {
    const {postId, id, name, email} = comment;
    return (
        <div>
            <p>PostId: {postId}</p>
            <p>Id: {id}</p>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
        </div>
    );
};

export {Comment};