import React, { useState } from 'react';
import api from '../../services/api'
import './styles.css'

export default function Login({ history }){
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    async function handleSubmit(event){
      event.preventDefault();
      localStorage.setItem('user',null);
      const response = await api.post('/login', { email, pwd });
      console.log(response.data)
  
      const { _id } = response.data;
  
      localStorage.setItem('user', _id);
      console.log("usuário existe? " + response.data[0] == null)
      if(response.data[0] == null){
        history.push('/register');
      }else{
        history.push('/listDashboard');
      }
    }
    return (
        <>
            <p>Login</p>
        
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">E-MAIL</label>
              <input 
                type="email"
                id="email"
                placeholder="example@example.com"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
              
              <label htmlFor="pwd">SENHA</label>
              <input 
                type="password" 
                id="pwd"
                value={pwd}
                onChange={event => setPwd(event.target.value)}
              />
              <a href="/register">Inscreva-se</a>
              <button type="submit" className="btn">Entrar</button>
              
            </form>
        </>
    )
}