import {apiService} from "../apiService/apiService";
import {urls} from "../../constants/urls/urls";

export const commentsService = {
    getAll: () => apiService.get(urls.comments.base)
}