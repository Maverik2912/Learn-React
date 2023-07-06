export const fetchLaunches = async () => {
    try {
        const response = await fetch('https://api.spacexdata.com/v3/launches/');
        return response.json();
    } catch (e) {
        throw new Error(e);
    }
}