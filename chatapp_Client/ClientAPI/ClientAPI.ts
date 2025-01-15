import axios, {AxiosResponse} from 'axios';

const clientAPI = axios.create({
    baseURL: 'http://localhost:5174/',
    headers: {
        'Content-Type': 'application/json',
    },
});


export const apiRequest = async<T>(url: string, method: 'GET'|'POST'|'PUT'|'DELETE', data?: any):Promise<T> =>{
    const response: AxiosResponse<T> = await clientAPI({
        method,
        url,
        data,
    });

    return response.data;


}