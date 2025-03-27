import axios from "axios";

const api = axios.create(
    {
        baseURL: 'https://reqres.in/api',
        headers: {
            Accept: "application/json",
            "Content-Type" : "application/json",
        },
    }
);

export const fetchUsers = async () => {
    try {
        const response = await api.get("/users/")
        return response.data;
    } catch (error) {
        console.log("Erro ao buscar o usuário: ", error.response?.data || error.message);
        throw error;
    }
};

export const fetchUsersId = async (id) => {
    id = Number(id);

    if (isNaN(id)) { 
        throw new Error("ID do usuário inválido. Deve ser um número inteiro.");
    }
    try {
        const response = await api.get(`/users/${id}`)
        return response.data;
    } catch (error) {
        console.log("Erro ao buscar o usuário: ", error.message);
        throw error;
    }
};

export const updateUser = async () => {
};

export const deleteUser = async (id) => {
    id = Number(id)

    if(isNaN(id)) {
        throw new Error("ID do usuário inválido. Deve ser um número inteiro.");
    }
    try {
        const response = await api.delete(`/users/${id}`)
        return response.data
    } catch (error) {
        console.log("Erro ao deletar o usuário: ", error.message);
        throw error;
    }
};

export const login = async (credentials) => {
    try {
        const response = await api.get("/login/", credentials)
        return response.data;
    } catch (error) {
        console.log("Erro ao logar: ", error.message);
        throw error;
    }
};