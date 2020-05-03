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
    const [investors, setInvestors] = useState([]);
    useEffect(()=>{
        async function loadInvestors(){
            const response = await api.get('/listInvestors');
            setInvestors(response.data);
        }
        loadInvestors();
    });
    return (
        <>
            <div className="listDiv" onLoad={listar}>
                <label htmlFor="investors-list"><strong>Lista de Investidores</strong></label>
                <ul className='list' id='investors-list'>
                    {investors.map(investor => (
                        <li className='investor' key={investor._id}>
                        <div className="broker-menu">
                        <p>{investor.name}</p>
                            <input type="checkbox" id={investor._id} className='checkbox-btn'/>
                            <label htmlFor={investor._id} id='icone'><img src={dropDown} id='dropdown-img' alt="dropdown menu"/></label>
                            <select multiple name="broker-ctt-options" id="broker-ctt-options">
                                <option className='broker-option'>{investor.email}</option>
                                <option className='broker-option'>{investor.phone}</option>
                            </select>
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
        </>
    )
}