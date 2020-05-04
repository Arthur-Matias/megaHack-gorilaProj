import React, { useState } from 'react';
import api from '../../services/api'
import validarCpf from '../../verificaCpf'

export default function Cadastro({ history }){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [phone, setPhone] = useState('');
    const [cpf, setCpf] = useState('');
    const [birthday, setBirthday] = useState('');
    const [sex, setSex] = useState('');
    const [broker, setBroker] = useState(false);


    function handleCpf(){
        let CPF = document.querySelector('#cpf').value;
        if(validarCpf.TestaCPF(CPF)){
            setCpf(CPF);
        }else{
            setCpf('');
            alert('CPF Inválido!!!');
        }
    }
    async function handleSubmit(event){
        event.preventDefault();
        document.getElementById("myBtn").disabled = true;
        handleCpf();
        let name = firstName.trim() + ' ' + lastName.trim();
        
        if (cpf !== '') {
            const response = await api.post('/registerUser', { name, email, pwd, phone, cpf, birthday, sex, broker });
            const { _id} = response.data;
  
            if (_id != null) {
                localStorage.setItem('user', _id);
                history.push('/listDashboard')
            }else{
                alert("Já existe uma conta com este e-mail ou cpf");
            }
        }        
    }
    return (
        <>
            <p>Cadastro</p>
        
            <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">Quem é você</label>
                <input
                    type="text"
                    id="firstName"
                    placeholder="Primeiro nome..."
                    value={firstName}
                    onChange={event => setFirstName(event.target.value)}
                    required
                />
                <input 
                    type="text"
                    id="lastName"
                    placeholder="Sobrenome..."
                    value={lastName}
                    onChange={event => setLastName(event.target.value)}
                />

                <label htmlFor="email">E-mail</label>
                <input 
                    type="email"
                    id="email"
                    placeholder="example@example.com"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    required
                />
          
                <label htmlFor="pwd">Senha</label>
                <input 
                    type="password" 
                    id="pwd"
                    value={pwd}
                    onChange={event => setPwd(event.target.value)}
                    required
                />

                <label htmlFor="telefone">Telefone</label>
                <input 
                    type="tel"
                    id="telefone"
                    placeholder="Somente numeros..."
                    value={phone}
                    onChange={event => setPhone(event.target.value)}
                    required
                />

                <label htmlFor="birthday">Data de Nascimento</label>
                <input 
                    type="date"
                    id="birthday"
                    value={birthday}
                    onChange={event => setBirthday(event.target.value)}
                    required
                />

                <label htmlFor="cpf">CPF</label>
                <input 
                    type="text"
                    id="cpf"
                    value={cpf}
                    onChange={event => setCpf(event.target.value)}
                    required
                />

                <label htmlFor="sexo">Sexo</label>
                <select name="sexo" id="sexo" onChange={event => setSex(event.target.value)}>
                    <option defaultValue>Selecione...</option>
                    <option value="masc">Masculino</option>
                    <option value="fem">Feminino</option>
                    <option value="nd">Prefiro não dizer</option>
                </select>

                <div className="checkbox-corretor">
                    <input 
                        type="checkbox" 
                        name="corretor" 
                        id="corretor"
                        onChange={event => setBroker(event.target.checked)}
                        />
                    <label
                        htmlFor="corretor" 
                        name='labelCorretor'
                        id='labelCorretor'
                        >Sou corretor de investimentos</label>
                </div>
                <button type="submit" className="btn" id='myBtn'>Cadastrar</button>
            </form>
        </>
    )
}