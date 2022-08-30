
import api from './api';

import { sessionService } from './SessionService';

function VehicleService(authorization) {
    const config = {
        headers: {
            authorization
        }
    };
    return {
        listMyVehicles: async () => api.get(
            '/vehicle/my',
            config
        ),
        createVehicle: async (vehicle) => api.post(
            '/vehicle', 
            {
                vehicle,
            },
            config
        ),
        updateVehicle: (vehicle, idVehicle) => api.put(
            '/vehicle',
            {
                vehicle
            },
            { 
                params: {
                    idVehicle
                },
                headers: config.headers
            }
        ),
        deleteVehicle: (idVehicle) => api.delete(
            '/vehicle',
            {
                params: {
                    idVehicle
                },
                headers: authorization
            }
        ),
        /**
         * 
         * @param {Object} body { 'query', 'queryForm' }
         * @returns 
         */
        searchVehicle: (body) => api.post(
            '/vehicle/search',
            body,
            config,
        )
    }
}

const { authorization } = sessionService.getSession();
export const vehicleService = VehicleService(authorization);
