import axios from 'axios';
import { API_HOST } from '../utils/constants';

export const getPokemonsApi = async () => {
    try {
        const url = `${API_HOST}/pokemon?limit=20&offset=0`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const getPokemonDetailsByUrlApi = async () => {
    try {
        const response  = await fetch(url);
        const result  = await response.json();

        return result;
    } catch (error) {
        throw error
    }


}