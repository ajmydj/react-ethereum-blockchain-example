import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';


const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x10dB31066008b598D3CE6eE931A2fbC5F0B86162'
);

export default instance;
