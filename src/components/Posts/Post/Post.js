const Post = ({post}) => {
    const {userId, id, title, body} = post;
    return (
        <div>
            <p>UserId: {userId}</p>
            <p>Id: {id}</p>
            <p>Title: {title}</p>
            <p>Body: {body}</p>
        </div>
    );
};

export {Post};