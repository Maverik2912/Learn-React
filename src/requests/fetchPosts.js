export const getAllPosts = async () => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        return await response.json();
    } catch(e){
        throw new Error(e);
    }
}