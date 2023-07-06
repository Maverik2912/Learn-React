export const fetchUsers = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        return response.json();
    } catch (e) {
        throw new Error(e);
    }
}