import './Navbar.css'
import { useEffect } from 'react';
import { web3auth } from '../../ConnectWallet/ConnectWallet';

function Navbar({ walletConnected, setWalletConnected }) {

  // Connecting wallet 
  const handleConnect = async () => {
    try {
       console.log('Initializing web3 auth...');
       await web3auth.initModal(); 
       console.log("Connecting wallet...")
       await web3auth.connect(); 
       setWalletConnected(true); 
       console.log("Wallet connected!")
    } catch (error){
        console.error(error)
    }
  }   

  // Disconnect connected wallet 
  const handleDisconnect = () => {
    try {
      setWalletConnected(false); 
      // setAccount(""); 
      console.log("Account disconnected!"); 
    } catch (error){
      console.error(error)
    }
  }

  useEffect(() => {
    // Console log the account connected
    // console.log("Account is: ", account); 
  })


  return (
      <div className="navbar">
        <div className="logo">
          <p>DappStarterKit</p>
        </div>

        {
          !walletConnected && (
            <button className="connect-button" onClick={handleConnect} >Connect Wallet</button>
          )
        }

        {
          walletConnected && (
            <div>
              {/* {
                account && (
                  <button className='connect-button'>
                    { account.slice(0,6) + "..." + account.slice(38,42) }
                  </button>
                )
              } */}
              <button className='connect-button' onClick={handleDisconnect}>Disconnect Wallet</button>
            </div>
          )
        }
        
      </div>
  );
}

export default Navbar;