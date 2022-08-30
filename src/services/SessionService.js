
import axios from 'axios';

import { environmentProd } from '../environment/environment.prod';

function SessionService() {
    return {
        getSession: () => {
            const session = JSON.parse(localStorage.getItem('Session'));
            if (session) {
                return session;
            } else {
                return "";
            }
        },
        createSession: async () => {
            try {
                const sessionPath = environmentProd.baseURL + '/session';
                console.log("sessionPath", sessionPath);
                const apiResponse = await axios.post(sessionPath);
                const { session } = apiResponse.data;
                localStorage.setItem('Session', JSON.stringify(session));    
                return apiResponse.data;
            } catch (error) {
                console.log(error);
            }
        },
    }
}

export const sessionService = new SessionService();
