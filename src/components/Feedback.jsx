import React, { useState, useEffect } from "react";
import { Container, Card, Form, FormGroup, Input, Label, Button, Alert, Spinner } from "reactstrap";

const Feedback = () => {
    const [formData, setFormData] = useState(
        {
            nome: '',
            email: '',
            feedback: '',
        }
    );
    const [submited, setSubmited] = useState(false)
    const [userNames, setUserNames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    
        const fetchUsers = async (req, res) => {
          try {
            const response = await fetch("https://api.npoint.io/180d953df8df8d9b7bee");
            if (!response.ok) {
              throw new Error("Erro ao buscar os dados")
            }
            const data = await response.json();
            const names = Array.from(new Set(data.map(user => user.nome)))
            setUserNames(names);
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
            setError("Preencha seu nome");
            return false;
        } else if (formData.email.includes("infnet")) {
            setError("O email precisa ser Institucional");
            return false;
        } else if (formData.feedback === "") {
            setError("Preencha seu feedback");
            return false;
        } else {
            setError('')
            setSubmited(true)
        }   
    }

    if (loading) return (
        <Container>
            <Spinner color="primary"/>
            <p>Carregando usuarios...</p>
        </Container>
    )

    return(
        <Container>
            <h2>Feedback</h2>
            <Form onSubmit={handleSubmit}>
                <Card body>
                    {error && <Alert color="danger">{error}</Alert>}
                    {!error && submited && 
                    <Alert color="success">Olá {formData.nome}, {formData.email}  seu feedback foi enviado!
                    </Alert>}
                    <FormGroup>
                        <Label for="nome">Nome:</Label>
                        <Input 
                        name="nome"
                        id="nome"
                        type="select" 
                        value={formData.nome}
                        onChange={(e) => setFormData({...formData, nome: e.target.value})}
                        required
                        >
                        <option value="">Selecionar usuário</option>
                        {userNames.map((name, index) => (
                            <option key={index} value={name}>{name}</option>
                        ))}
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input 
                        name="email"
                        type="email" 
                        value={formData.email} 
                        placeholder="E-mail" 
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                    </FormGroup>
                   <FormGroup>
                        <Label for="nome">Feedback</Label>
                        <Input
                        type="textarea"
                        name="feedback"
                        value={formData.feedback}
                        placeholder="Feedback" 
                        onChange={(e) => setFormData({...formData, feedback: e.target.value})}
                        />
                        <small className="text-muted">
                            {formData.feedback.length} caracters(mínimo 100)
                        </small>
                    </FormGroup>
                    <Button color="primary" type='submit'>Enviar</Button>
                </Card>
            </Form>
        </Container>
    );
}

export default Feedback;