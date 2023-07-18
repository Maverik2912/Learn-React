import axios from "axios";

const instance = axios.create({
    headers: {'Content-Type': 'application/json; charset=UTF-8'}
});
const EndPoints = {
    PLACEHOLDER: 'https://jsonplaceholder.typicode.com'
}
export const apiServices = {
    postUser: (user) => {
       return instance.post(`${EndPoints.PLACEHOLDER}/users`, user)
           .then(response => response.data);
    },
    postComment: (comment) => {
       return instance.post(`${EndPoints.PLACEHOLDER}/comments`, comment)
           .then(response => response.data);
    }
}