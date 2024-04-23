import axios from "axios";
import { Client, Assistant, ClientAssistant } from "../interfaces/interfaces";


const api = axios.create({
    baseURL: "http://localhost:3009/api",
});

export async function fetchAssistants() {
    try {
        const res = await api.get('http://localhost:3009/api/assistants/all/');
        return res.data;
    } catch (error) {
        console.error('Erro ao buscar assistentes:', error);
        return [];
    }
}

export async function fetchNewClients() {
    try {
        const res = await axios.get('http://localhost:3009/api/clients/new/');
        return res.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function fetchMyClients(assistantId: string) {
    try {
        const res = await api.get(`http://localhost:3009/api/clients/mine/assistant/${assistantId}`);
        return res.data;
    } catch (error) {
        console.error('Erro ao buscar clientes:', error);
        return [];
    }
}

export async function createClient(data: Client) {
    try {
        const res = await api.post(`http://localhost:3009/api/clients/new/add/`, data);
        return res.data;
    } catch (error) {
        console.error('Erro ao criar cliente:', error);
        return [];
    }
}

export async function createAssistant(data: Assistant) {
    try {
        const res = await api.post(`http://localhost:3009/api/assistants/add/`, data);
        return res.data;
    } catch (error) {
        console.error('Erro ao criar assistente:', error);
        return [];
    }
}

export async function updateClientsWithAssistants(clientAssistants: ClientAssistant[]) {

    try {
        const res = await api.put(`http://localhost:3009/api/clients/update/assistants`, clientAssistants);
        return res.data;
    } catch (error) {
        console.error('Erro ao atualizar clientes com assistentes:', error);
        return [];
    }
}

export async function removeAssistantsFromClients(clientAssistants: ClientAssistant[]) {
    try {
        const res = await api.put(`http://localhost:3009/api/clients/remove/assistants`, clientAssistants);
        return res.data;
    } catch (error) {
        console.error('Erro ao remover assistentes de clientes:', error);
        return [];
    }
}

export default api;