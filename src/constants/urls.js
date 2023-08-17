const baseURL = process.env.REACT_APP_API;

const episode = '/episode';
const character = '/character';

const urls = {
    episode,
    character: {
        byIds: (ids) => `${character}/${ids}`
    }
}

export {
    baseURL,
    urls
}