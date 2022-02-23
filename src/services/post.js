import axios from 'axios';

const httpRequest = {
    getPosts: data => axios.get('https://jsonplaceholder.typicode.com/posts'),
}

export default httpRequest;