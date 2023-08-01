import {apiPlaceholderService} from "../apiServices/apiServices";
import {urls} from "../../constants/urls";

export const placeholderService = {
    getPosts: () => apiPlaceholderService.get(urls.placeholder.posts),
    getComments: () => apiPlaceholderService.get(urls.placeholder.comments)
}