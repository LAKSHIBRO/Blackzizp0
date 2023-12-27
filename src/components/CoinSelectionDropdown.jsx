import React, { useState } from 'react';

const CoinSelectionDropdown = ({ coins }) => {
    const [selectedCoin, setSelectedCoin] = useState(coins[0]);
    const [isOpen, setIsOpen] = useState(false); 

    const handleCoinSelect = (coin) => {
        setSelectedCoin(coin);
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50"
                    id="coin-selector"
                    aria-haspopup="listbox"
                    aria-expanded="true"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="flex items-center space-x-2">
                        <img src={selectedCoin.small} alt={selectedCoin.name} className="w-6 h-6" />
                        <span className="text-[#151515]">{selectedCoin.name}</span>
                    </div>
                    <svg
                        className="w-5 h-5 ml-2 -mr-1 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div className="absolute w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
                    <ul
                        tabIndex="-1"
                        role="listbox"
                        aria-labelledby="coin-selector"
                        aria-activedescendant="coin-item-0"
                        className="py-1"
                    >
                        {coins.map((coin, index) => (
                            <li
                                key={coin.id}
                                id={`coin-item-${index}`}
                                role="option"
                                onClick={() => {
                                    handleCoinSelect(coin);
                                    setIsOpen(false);
                                }}
                                className="relative px-4 py-2 cursor-pointer select-none"
                            >
                                <div className="flex items-center space-x-2">
                                    <img src={coin.small} alt={coin.name} className="w-6 h-6" />
                                    <span className="text-[#151515]">{coin.name}</span>
                                </div>
                                {selectedCoin.id === coin.id && (
                                    <svg
                                        className="absolute w-5 h-5 ml-2 text-green-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CoinSelectionDropdown;
