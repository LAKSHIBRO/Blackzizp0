import React from 'react'
import { Link } from 'react-router-dom';

const CoinTrending = ({ coin }) => {
    console.log(coin);
    return (

        // <Link to={`/CoinChart/${coin.id}`}>
        <div className="w-full flex flex-col ">
            <div className="w-full flex flex-row justify-start items-center space-x-5 p-2 bg-slate-50 cursor-pointer">
                <img src={coin.small} alt={coin.name} />
                <h2 className='text-[#151515]'>{coin.name}</h2>
                <small className='text-xs'>({coin.symbol})</small>
            </div>
        </div>
    // </Link>
    )
}

export default CoinTrending;





















// import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
// import BTC from '../Assets/Icons/bitc.png';

// const DropDownContainer = styled("div")`
//   width: 100%;
//   margin: 0 auto;
//   cursor: pointer;
// `;

// const DropDownHeader = styled("div")`
//   margin-bottom: 0.8em;
//   padding: 0.4em 2em 0.4em 1em;
//   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
//   font-weight: 500;
//   font-size: 1.3rem;
//   color: #151515;
//   background: #ffffff;
// `;

// const DropDownListContainer = styled("div")`
//   display: absolute;
//   cursor: pointer;
// `;

// const DropDownList = styled("ul")`
//   padding: 0;
//   margin: 0;
//   padding-left: 1em;
//   background: #ffffff;
//   border: 2px solid #e5e5e5;
//   box-sizing: border-box;
//   color: #151515;
//   font-size: 1.3rem;
//   font-weight: 500;
//   &:first-child {
//     padding-top: 0.8em;
//   }
// `;

// const ListItem = styled("li")`
//   list-style: none;
//   margin-bottom: 0.8em;
//   cursor: pointer;
// `;

// const CoinTrending = ({ coin }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggling = () => setIsOpen(!isOpen);
//   const [selectedOption, setSelectedOption] = useState(null);

//   const onOptionClicked = (coin) => () => {
//     setSelectedOption(coin);
//     setIsOpen(false);
//     console.log(selectedOption);
//   };

//   console.log(coin);

//   useEffect(() => {
//     // Set the default selectedOption to the first coin when the component mounts
//     if (coin && coin.length > 0) {
//       setSelectedOption(coin[0]);
//     }
//   }, [coin]);


  
//   // Ensure that coin is an array or can be converted to an array
//   const coinsArray = Array.isArray(coin) ? coin : [coin];

//   return (
//     <div className="w-[80%] p-2 mx-auto  rounded-lg">
//       <DropDownContainer>
//         <DropDownHeader onClick={toggling}>
//           {selectedOption ? (
//             <div className="w-full flex flex-row justify-start items-center space-x-5">
//               <img src={selectedOption[0].small} alt="" className="w-[44px] h-[44px]" />
//               <h2 className="font-normal">{selectedOption[0].name}</h2>
//             </div>
//           ) : null /* Do not render anything for default header */}
//         </DropDownHeader>
//         {isOpen && (
//           <DropDownListContainer>
//             <DropDownList>
//               {coinsArray.map((coinItem) => (
//                 <ListItem onClick={onOptionClicked(coinItem)} key={coinItem.name} className="hover:bg-slate-100">
//                   <div className="w-full flex flex-row justify-start items-center space-x-5">
//                     <img src={coinItem.small} alt="" className="w-[44px] h-[44px]" />
//                     <h2 className="font-normal">{coinItem.name}</h2>
//                   </div>
//                 </ListItem>
//               ))}
//             </DropDownList>
//           </DropDownListContainer>
//         )}
//       </DropDownContainer>
//     </div>
//   );
// };

// export default CoinTrending;









