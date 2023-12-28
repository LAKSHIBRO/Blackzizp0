import React, { useState, useEffect } from "react";
import Popup from 'reactjs-popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown, faCoins, faShield, faGem } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import jwt_decode from "jwt-decode";
import { env_data } from "../config/config";


const PopUp = ({ icon, name, list, price, closePopUp, pkg }) => {


    console.log("🚀 ~ file: popup.jsx:8 ~ PopUp ~ pkg:", pkg);

    const [selectedPkg, setSelectedPkg] = useState({});
    const [decodeData, setDecodeData] = useState("");
    const [userId, setUserId] = useState("");
    useEffect(() => {
      // Page();
      refreshToken();
    }, []);
    const refreshToken = async () => {
        try {
          const response = await axios.get(`${env_data.base_url}/token`);
          const decoded = jwt_decode(response.data.accessToken);
          console.log(
            "🚀 ~ file: MyProfile.jsx:121 ~ refreshToken ~ decoded:",
            decoded
          );
          setDecodeData(decoded);
          setUserId(decoded.userId);
        } catch (error) {
          if (error.response) {
            // history.push("/");
          }
        }
      };
      const Buy = async (e) => {
        console.log("asd", selectedPkg, userId);
        e.preventDefault();
        try {
          //   setWait(true);
          const res = await axios.post(`${env_data.base_url}/buypackage`, {
            packageId: pkg[0].id,
            userId: userId,
          });
          closePopUp();
          //   setJoke(true);
        } catch (error) {
          if (error.response) {
            // setWait(false);
            // setJoke(true);
            closePopUp();
            setTimeout(() => {
              //   setJoke(false);
            }, 2000);
          }
        }
      };
    return (
        <Popup
            open={true}
            modal
            nested
            closeOnDocumentClick={false} // Disable background click
  closeOnEscape={false}
        >
            {close => (
                <div className="modal">
                    <button className="close" onClick={() => { closePopUp(); close(); }}>
                        &times;
                    </button>
                    <div className="header package_name flex flex-col items-center">
                    <span className='crown text-[#FFA524] text-[1.2rem] text-center bg-transparent'><FontAwesomeIcon icon={icon}/></span>
                        <h4 className='pacakge_list text-[#E08E20] md:text-[2rem] text-[1rem] uppercase'>{name}</h4>
                    </div>
                    <div className="content">


                        {list.map((item, index) => (
                            <div key={index}>
                                <h4 className='pacakge_list text-[#c0c0c0] md:text-[1.2rem]'>{item}</h4></div>
                        ))}
                    </div>
                    <div className='mt-5 w-2/3 justify-center flex flex-row space-x-5 mx-auto'>

                    <select
              className="bg-[#1a1a1a] outline-none w-full border-none p-2 text-[#c0c0c0]"
              value={selectedPkg} // Set the selected value to the state variable
              onChange={(e) => setSelectedPkg(e.target.value)}
            >
              <option disabled value="">
                Prices
              </option>
              {pkg?.map((p, index) => (
                <option key={index} value={p.id}>
                  {p.amount}
                </option>
              ))}
            </select>
                        <button  onClick={Buy} className='py-2 px-4 rounded-md uppercase text-[12px] text-[#151515] bg-gradient-to-r from-[#ffd62d] to-[#ffa524]'>Buy</button>

                    </div>
                </div>
            )}
        </Popup>

    );

}

export default PopUp;