import React from 'react';
import InvestorList from './investors/investorList';
import BrokerList from './brokers/brokerList';


export default function list(){
    return (
        <>
            <div>
                <InvestorList />
                <BrokerList />
            </div>
        </>
    )
}