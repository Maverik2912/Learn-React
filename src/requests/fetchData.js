export const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        return response.json();
    } catch (e) {
        throw new Error(e);
    }
}