import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import UseAxios from "../hooks/useAxios";
import CoinDetail from "./CoinDetail";

const DropDownContainer = styled("div")`
  width: 100%;
  margin: 0 auto;
  cursor:pointer;
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #151515; 
  background: #ffffff;
`;

const DropDownListContainer = styled("div")`
    display: absolute;
    cursor:pointer;

`;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #151515;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  cursor:pointer;
`;

const LiveMarket = ({ onSelectCoin }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [coinData, setCoinData] = useState([]);
    // const { response } = UseAxios('search/trending');
    const { response } =null;
    const [selectedCoin, setSelectedCoin] = useState(null);
  

    const selectDefaultCoin = () => {
      if (coinData.length > 0) {
        setSelectedOption(coinData[0]);
        onSelectCoin(coinData[0]);
      }
    };

    useEffect(() => {
      if (response && response.coins) {
        setCoinData(response.coins.map((coin) => coin.item));
        selectDefaultCoin(); 
      } 
    }, [response]); 


    // useEffect(() => {
    //   if (response && response.coins) {
    //     const coins = response.coins.map((coin) => coin.item);
    //     setCoinData(coins);
  
    //     if (!selectedCoin && coins.length > 0) {
    //       setSelectedCoin(coins[0]);
    //     }
    //   }
    // }, [response, selectedCoin]);



    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = (coin) => () => {
      setSelectedOption(coin);
      setIsOpen(false);
      onSelectCoin(coin);
    };

    return (
        <div className="sm:w-[80%] sm:p-2 mx-auto w-full  rounded-lg">
          <DropDownContainer>
            <DropDownHeader onClick={toggling} className="rounded-md">
              {selectedOption ? (
                <div className="w-full flex flex-row justify-start items-center space-x-5 rounded-md">
                  {selectedOption.small && <img src={selectedOption.small} alt="" className="sm:w-[44px] sm:h-[44px] w-[28px] h-[28px]" />}
                  <h2 className="font-normal text-[12px] sm:text-[1rem]">{selectedOption.name}</h2>
                </div>
              ) : (
                <div className="default-header w-full flex flex-row justify-start items-center space-x-5 rounded-md">
                  {coinData.length > 0 && coinData[0].small && <img src={coinData[0].small} alt="" className="sm:w-[44px] sm:h-[44px] w-[28px] h-[28px]" />}
                  <h2 className="font-normal text-[12px] sm:text-[1rem]">
                  {coinData.length > 0 ? coinData[0].name : 'Loading...'}</h2>
                </div>
              )}
            </DropDownHeader>
            {isOpen && (
              <DropDownListContainer>
                <DropDownList>
                  {coinData.map((coin) => (
                    <ListItem onClick={onOptionClicked(coin)} key={coin.id} className="hover:bg-slate-100 rounded-md">
                      <div className="w-full flex flex-row justify-start items-center space-x-5">
                        {coin.small && <img src={coin.small} alt="" className="sm:w-[44px] sm:h-[44px] w-[28px] h-[28px]" />}
                        <h2 className="font-normal text-[12px] sm:text-[1rem]">{coin.name}</h2>
                      </div>
                    </ListItem>
                  ))}
                </DropDownList>
              </DropDownListContainer>
            )}
          </DropDownContainer> 
        </div>
    );
};

export default LiveMarket;
