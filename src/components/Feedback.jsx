import React, { useState, useEffect } from "react";
import { Card } from "reactstrap";

const Feedback = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState(
        {
            nome: '',
            email: '',
            feedback: '',
        }
    );

    useEffect(() => {
    
        const fetchUsers = async (req, res) => {
          try {
            const response = await fetch("https://api.npoint.io/180d953df8df8d9b7bee");
            if (!response.ok) {
              throw new Error("Erro ao buscar os dados")
            }
            const data = await response.json();
            setUsers(data)
          } catch (error) {
            setError(error.message);
            console.error("Sem resposta", error)
          } finally{
            setLoading(false)
          }
        }
        fetchUsers();
      }, []);


    const handleSubmit = (e) => {
        e.preventDefault();
        

        if (formData.nome === "") {
            alert("Preencha seu nome")
        } else if (formData.email === "") {
            alert("Preencha seu email")
        } else if (formData.feedback === "") {
            alert("Preencha seu feedback")
        } else {
            const confirmationMessage = `
            Olá ${formData.nome}, <${formData.email}> seu feedback foi enviado!
            `
            alert(confirmationMessage)
        }   
    }

    return(
        <div>
            <h2>Feedback</h2>
            <Card>
                <form onSubmit={handleSubmit}>
                    <input 
                    name="nome"
                    type="text" 
                    value={formData.nome}
                    placeholder="Nome"
                    onChange={(e) => setFormData({...formData, nome: e.target.value})}
                    />
                    <input 
                    name="email"
                    type="email" 
                    value={formData.email} 
                    placeholder="E-mail" 
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                    <textarea
                    value={formData.feedback}
                    placeholder="feedback" 
                    onChange={(e) => setFormData({...formData, feedback: e.target.value})}
                    />
                    <button type='submit'>Enviar</button>
                </form>
            </Card>
        </div>
    );
}

export default Feedback;