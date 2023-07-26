import React, { useEffect, useState } from 'react';
import { Contract, ethers } from 'ethers';
import { contractAddress } from '../utils/constants';

// import { ContractABI, contractAddress } from '../utils/constants';

export const TransactionContext = React.createContext();

const { ethereum } = window;


const getethereumContract = () => {
    const provider = new ethers.provider.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

    console.log({
        provider,
        signer,
        transactionContract
    })
}

    export const TransactionProvider = ({children}) => {
        return (
            <TransactionContext.Provider value={{}}>
            {children}
            </TransactionContext.Provider>
        )
    }
