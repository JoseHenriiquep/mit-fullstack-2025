import React, { useState, useEffect } from "react";
import { fetchUsers, fetchUsersId, deleteUser, login } from "./services/apiService";

const UserAxios = () => {
    
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //Login
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [response, setResponse] = useState(null);

    //Encontrar pelo ID
    const [user, setUser] = useState("")

    const handleLogin = async () => {
        try {
            const data = await login ({email, password});
            setResponse(data);
        } catch (error) {
            console.error("Erro ao fazer login", error)
        } 
    }


    const getUserId = async () => {
        try {
            const response = await fetchUsersId(user)
            setUser(response.data.first_name)
            console.log("Usuário Encontrado", response)
     } catch (error) {
            console.error("Erro ao buscar usuario", error.message)
        }
    }

    const deleteUser = async () => {
        try {
            const response = await deleteUser(user)
            setUser(response)
            console.log(`Usuário ${response} foi deletado`)
        } catch (error) {
            console.error("Erro ao deletar usuario", error.message)
        }
    }

    useEffect(()=> {

        const getUsers = async () => {
            try {
                const response = await fetchUsers();
                setUsers(response.data);
            } catch (error) {
                setError(error.message);
            } finally{
                setLoading(false);
            }
        }
        getUsers();
    }, [])

    if(loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>

    return(
        <div>
            <>
                <div style={{marginTop: "20px"}}>
                    <h3>Login</h3> 
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@domain.com"/>
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha"/>
                    <button onClick={handleLogin}>Entrar</button>
                    {response && <pre>Login realizado com sucesso!</pre>}
                </div>
                
                <div style={{marginTop: "20px"}}>
                    <h3>All Users</h3> 
                    {users.map((user) => (
                        <div className="card" key={user.id}>{user.email}</div>
                    ))}
                </div>
                <div style={{marginTop: "20px"}}>
                    <h3>Find User by Id</h3> 
                    <input type="number" onChange={(e) => setUser(e.target.value)}/>
                    <button onClick={getUserId}>buscar</button>
                    <p>{user}</p>
                </div> 
                <div style={{marginTop: "20px"}}>
                    <h3>Delete User</h3> 
                    <input type="number" onChange={(e) => setUser(e.target.value)}/>
                    <button onClick={deleteUser}>Deletar usuário</button>
                    <p>{user}</p>
                </div> 
            </>
        </div>
    );
}

export default UserAxios;