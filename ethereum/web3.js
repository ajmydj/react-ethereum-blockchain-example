import Web3 from 'web3';

//const web3 = new Web3(windows.web3.currentProvider);

let web3;

if (typeof window !== 'undefined' && window.web3 != 'undefined') {    
    //we are in the browser and metamask is running
    web3 = new Web3(window.web3.currentProvider);
}   else   {
    //We are on the server or the user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/xSBFIRaX3O3gF3utUHIP'
    );
    web3 = new Web3(provider);

}


export default web3;