import axios from "axios";

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID RaNVNxmnIBgfXvA0GVfwQ4Ob5odXK0dHudEmx6PFlhY'
    },
});