import React from 'react';
import Popup from 'reactjs-popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown, faCoins, faShield, faGem } from '@fortawesome/free-solid-svg-icons';


const UpdateUser = ({ closePopUp, popUpData }) => {


    const { firstName, lastName, email, contact } = popUpData;


    return (
        <Popup
            open={true}
            modal
            nested
        >
            {close => (
                <div className="modal">
                    <button className="close" onClick={() => { closePopUp(); close(); }}>
                        &times;
                    </button>
                    <div className='bg-[#151515] p-5 flex flex-col space-y-5'>
                        <h2 className='text-[#FFA524] text-[1.1rem]'>Update user</h2>

                        {/* <h2 className='text-white'>{firstName}</h2>

                        <p>First Name: {firstName}</p>
                        <p>Last Name: {lastName}</p>
                        <p>Email: {email}</p>
                        <p>Contact: {contact}</p> */}



                        <div className='flex flex-row w-full space-x-5'>
                            <div className='row1 flex flex-col w-1/2 space-y-3'>

                                <div className='input-wrapper flex flex-col w-full space-y-2'>
                                    <span className='text-[14px] uppercase text-[#FFFFF]'>First Name</span>
                                    <div className='firstName border-[1px] border-[#565656] border-opacity-40 rounded-md'>
                                        <input type='text' placeholder={firstName} className='w-full outline-none p-2 bg-transparent rounded-md text-[#c0c0c0] ' />
                                    </div>
                                </div>

                                <div className='input-wrapper flex flex-col w-full space-y-2'>
                                    <span className='text-[14px] uppercase text-[#FFFFF]'>Last Name</span>
                                    <div className='firstName border-[1px] border-[#565656] border-opacity-40 rounded-md'>
                                        <input type='text' placeholder={lastName} className='w-full outline-none p-2 bg-transparent rounded-md text-[#c0c0c0] ' />
                                    </div>
                                </div>


                            </div>


                            <div className='row1 flex flex-col w-1/2 space-y-3'>

                                <div className='input-wrapper flex flex-col w-full space-y-2'>
                                    <span className='text-[14px] uppercase text-[#FFFFF]'>Contact</span>
                                    <div className='firstName border-[1px] border-[#565656] border-opacity-40 rounded-md'>
                                        <input type='text' placeholder={contact} className='w-full outline-none p-2 bg-transparent rounded-md text-[#c0c0c0] ' />
                                    </div>
                                </div>

                                <div className='input-wrapper flex flex-col w-full space-y-2'>
                                    <span className='text-[14px] uppercase text-[#FFFFF]'>Email</span>
                                    <div className='firstName border-[1px] border-[#565656] border-opacity-40 rounded-md'>
                                        <input type='text' placeholder={email} className='w-full outline-none p-2 bg-transparent rounded-md text-[#c0c0c0] ' />
                                    </div>
                                </div>


                            </div>



                        </div>

                        <div className='flex flex-row w-full justify-end items-end space-x-5'>
                            <button 
                            onClick={() => { closePopUp(); close(); }}
                            className='py-1 px-3 border-[#c0c0c0] border-[1px] uppercase font-semibold text-[#c0c0c0] text-[12px] rounded-md'>
                                Cancel
                            </button>


                            <button className='py-1 px-3 bg-[#FFA524] uppercase font-semibold text-[#151515] text-[12px] rounded-md'>
                                Save
                            </button>
                        </div>


                    </div>
                </div>
            )}
        </Popup>

    );

}

export default UpdateUser;