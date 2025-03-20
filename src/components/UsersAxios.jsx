import React, { useState, useEffect } from "react";
import { fetchUsers, login } from "./services/apiService";

const UserAxios = () => {
    
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //Login
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [response, setResponse] = useState(null);

    const handleLogin = async () => {
        try {
            const data = await login ({email, password});
            setResponse(data);
        } catch (error) {
            console.error("Errp ao fazer login", error)
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
                <div>
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@domain.com"/>
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha"/>
                    <button onClick={handleLogin}>Entrar</button>
                    {response && <pre>Login realizado com sucesso!</pre>}
                </div>
                <div>
                {users.map((user) => (
                    <div className="card" key={user.id}>{user.email}</div>
                ))}
                </div>
            </>
        </div>
    );
}

export default UserAxios;