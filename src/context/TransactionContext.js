import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

// import { ContractABI, contractAddress } from '../utils/constants';

export const TransactionContext = React.createContext();

const { ethereum } = window;


const getethereumContract = () => {
    const provider = new ethers.provider.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract

    console.log({
        provider,
        signer,
    })
}