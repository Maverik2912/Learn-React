import {apiService} from "./apiService";
import {urls} from "../constants";

const characterService = {
    byIds: ids => apiService.get(urls.character.byIds(ids))
}

export {
    characterService
}