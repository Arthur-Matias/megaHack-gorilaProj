import React, { useEffect, useState } from 'react';
import api from '../../../services/api'
import dropDown from '../../../assets/angle-down-solid.svg';

import './style.css'
import './../styles.css'


export default function MainList(){
    async function listar(){
        //let user_id = localStorage.getItem('user');
        //let page = 0;
        //se quiser receber o id do user logado e a page é só enviar para o servidor nessa parte
    }
    const [brokers, setBrokers] = useState([]);
    useEffect(()=>{
        async function loadBrokers(){
            const response = await api.get('/listBrokers');
            setBrokers(response.data);
        }
        loadBrokers();
    });
    return (
        <>
            <div className="listDiv" onLoad={listar}>
                <label htmlFor="investors-list"><strong>Lista de Corretores</strong></label>
                <ul className='list' id='investors-list'>
                    {brokers.map(broker => (
                        <li className='investor' key={broker._id}>
                        <div className="broker-menu">
                        <p>{broker.name}</p>
                            <input type="checkbox" id={broker._id} className='checkbox-btn'/>
                            <label htmlFor={broker._id} id='icone'><img src={dropDown} id='dropdown-img' alt="dropdown menu"/></label>
                            <select multiple name="investor-ctt-options" id="investor-ctt-options">
                                <option className='investor-option'>{broker.email}</option>
                                <option className='investor-option'>{broker.phone}</option>
                            </select>
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
        </>
    )
}