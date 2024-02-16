import axios from 'axios';
import { API_HOST } from '../utils/constants';

export const getPokemonsApi = async (endPointUrl) => {
    try {
        const url = `${API_HOST}/pokemon?limit=20&offset=0`;
        const response = await axios.get(endPointUrl || url);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getPokemonDetailsByUrlApi = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {a
        throw error;
    }
};
