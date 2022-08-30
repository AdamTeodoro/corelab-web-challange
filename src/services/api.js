import axios from "axios";

import { environmentProd } from '../environment/environment.prod';

const api = axios.create({
    baseURL: environmentProd.baseURL,
});

export default api;
