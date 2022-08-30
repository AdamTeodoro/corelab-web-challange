import api from './api';

import { sessionService } from './SessionService';

function FavoriteService(authorization) {
    const config = {
        headers: {
            authorization
        }
    };
    return {
        getFavorites: () => api.get('/favorite/my', config),
        createFavorite: (idVehicle) => api.post(
            '/favorite', 
            {
                idVehicle
            },
            config
        ),
        deleteFavorite: (idFavorite) => api.delete(
            '/favorite', 
            {
                headers: config.headers,
                params: {
                    idFavorite
                },
            }
        )
    }
}

const { authorization } = sessionService.getSession();
export const favoriteService = FavoriteService(authorization);
