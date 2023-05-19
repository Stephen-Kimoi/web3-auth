import abi  from '../contracts/SimpleStorage.json'; 
// import { SimpleStorage as contractAddress } from '../contracts/contracts-address.json'; 
import SimpleStorage from '../contracts/contracts-address.json'; 
import { ethers } from 'ethers';

const contractInstance = async (needSigner = false, provider) => {
    try {
      let simpleStorage; 
      
      // Get signer from provider parameter
      const signer = await provider.getSigner(); 

      if (needSigner) {
        simpleStorage = new ethers.Contract(SimpleStorage, abi.abi, signer); 
      } else {
        simpleStorage = new ethers.Contract(SimpleStorage, abi.abi, provider); 
      }

      return simpleStorage;  
    } catch (error) {
        console.error(error)
    }
}

export default contractInstance; 