import {apiService} from "../apiService/apiService";
import {urls} from "../../constants/urls/urls";

export const albumsService = {
    getAll: () => apiService.get(urls.albums.base)
}