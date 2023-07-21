import { AiFillPlayCircle} from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import {BsInfoCircle } from 'react-icons/bs';

//  import { loader} from './';

// const Welcome = () => {
//     return(
//       <div className="flex w-full justify-center items-center">
//         <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-30 px-4">
//          <div >
// fsjjkhsfkj
//          </div>
//         </div>
//       </div>
//     )
// }
// export default Welcome

const Welcome = () => {
  const connectwallet = () => {
    
  }
    return(
      <div className="flex w-full justify-center items-center">
        <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
           <div className="flex flex-1 justify-start flex-col md:mr-10">
             <h1 className="text-3x1 sm:text-5xl text-white text-gradient py-1">
                Send Crypto <br/> across the world
             </h1>
             <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
                Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.
             </p>
             <button 
             type="button" 
             onClick={connectwallet}>

             </button>
           </div>
        </div>
      </div>
    )
}
export default Welcome