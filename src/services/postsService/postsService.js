import {apiService} from "../apiService/apiService";
import {urls} from "../../constants/urls/urls";

export const postsService = {
    getById: id => apiService.get(urls.posts.byId(id))
}