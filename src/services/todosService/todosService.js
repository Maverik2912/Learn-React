import {apiService} from "../apiService/apiService";
import {urls} from "../../constants/urls/urls";

export const todosService = {
    getAll: () => apiService.get(urls.todos.base)
}