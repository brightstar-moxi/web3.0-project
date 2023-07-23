import { AiFillPlayCircle} from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import {BsInfoCircle } from 'react-icons/bs';

//  import { loader} from './';
const commonStyles ='min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'       
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
             onClick={connectwallet}
             className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]">
                 <p className="text-white text-base font-semibold">Connect Wallet</p>
             </button>
             <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
              <div className={`rounded-tl-2xl ${commonStyles}`}>

              </div>
             </div>
           </div>
        </div>
      </div>
    )
}
export default Welcome