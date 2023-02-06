import api from './api'

export async function getAllPolls(token) {
    const response = await api.get('/polls',{
        headers:{
            Authorization: `Bearer ${token}`
        }
    });
    return response.data
}