import React, { useState } from 'react';
import { TuneRounded, ArrowDropDownRounded, VpnKey, VisibilityOff, Visibility, VerifiedUser, AlternateEmail,CurrencyBitcoin } from '@mui/icons-material';
import bitcoin from '../Assets/Icons/bitcoin coin.png';
import rank from '../Assets/Icons/rank.png';
import { Search, Menu } from '@mui/icons-material';
import commonbg from '../Assets/images/gergeg-01.png';
import AnimatedImage from '../components/AnimatedBG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown, faCoins, faShield, faGem } from '@fortawesome/free-solid-svg-icons';
import DefaultCoinChart from '../components/DefaultCoinChart';
// import Trending from '../components/Trending';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { MDCSwitch } from '@material/switch';
import { Switch } from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useEffect } from 'react';


const Security = () => {

    const [passwordStyle, setPasswordStyle] = useState({});
    const [confirmPasswordStyle, setConfirmPasswordStyle] = useState({});
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [currentPasswordVisible, setcurrentPasswordVisible] = useState(false);
    const [emailStyle, setEmailStyle] = useState({});
    const [BnBStyle, setBnBStyle] = useState({});
    const [confirmemailStyle, setconfirmEmailStyle] = useState({});
    const [state, setState] = useState('');



    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };
    const togglecurrentPasswordVisibility = () => {
        setcurrentPasswordVisible(!currentPasswordVisible);
    };

    const [checked, setChecked] = React.useState(false);

    const toggleChecked = () => {
        setChecked((prev) => !prev);
    };



    const PasswordSchema = Yup.object().shape({

        newPassword: Yup.string()
            .min(8, 'Must be at least 8 characters long')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*[\]{}()?"\\,><':;|_~`=+-])[a-zA-Z\d!@#$%^&*[\]{}()?"\\,><':;|_~`=+-]{12,99}$/,
                'Must contain at least 8 Characters, 1 Uppercase, 1 Lowercase, 1 Special Character, and 1 Number'
            )
            .required('Required'),
        confirmPassword: Yup.string()
            .min(8, 'Must be at least 8 characters long')
            .oneOf([Yup.ref('password')], 'Your passwords do not match.')
            .required('Required'),

    });


    const authSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email')
            .required('Required'),
        confirmemail: Yup.string().email('Invalid email')
            .required('Required'),
    });


    const BnB = Yup.object().shape({
        bnbId: Yup.string()
            .required('Reguired'),
    });

    const handleBlur = (field) => {

        if (field === 'password') {
            setPasswordStyle({
                backgroundColor: 'white',
                color: 'black',
            });
        }
        else if (field === 'confirmPassword') {
            setConfirmPasswordStyle({
                backgroundColor: 'white',
                color: 'black',
            });
        }
        else if (field === 'email') {
            setEmailStyle({
                backgroundColor: 'white',
                color: 'black',
            });
        }
        else if (field === 'confirmemail') {
            setconfirmEmailStyle({
                backgroundColor: 'white',
                color: 'black',
            });
        }
        else if (field === 'bnbId') {
            setBnBStyle({
                backgroundColor: 'white',
                color: 'black',
            });
        }

    };

    return (
        <div className='w-full bg-[#1E1E1E] h-full fixed right-0 flex flex-col '>

            <div className='res-body lg:ml-[300px] md:ml-[100px] flex flex-col'>


                <div
                    className="flex flex-col dash-body w-full h-screen sm:p-8 p-3 overflow-y-scroll pt-[66px] "
                    id="style-6"
                >
                    <h2 className='text-[24px] font-semibold text-white'>Security</h2>
                    <h3 className='text-[18px] font-normal text-[#E08E20]'>Dashboard > My Profile > Security</h3>





                    <div className='flex flex-col w-full  md:space-x-[44px] mt-[44px]  space-x-0 relative border-[1px] border-[#565656] bg-[#151515] rounded-md'>

                        <div className='flex flex-row space-x-5 justify-start p-3 items-center'>
                            <span className='text-[#E08E20]'><VpnKey /></span>
                            <h2 className='text-[#C0C0C0] text-[12px] md:text-[14px] uppercase'>Password</h2>
                        </div>


                        <div className='flex flex-col p-3 md:p-0'>


                            <div className='form-field-container flex md:flex-row flex-col sm:mt-5 md:mt-2 md:w-1/2 md:space-x-2 justify-between items-center w-full'>
                                <div className='form-field-label flex text-left justify-start items-start md:w-2/5 w-full'>
                                    <span className='text-white text-[12px] uppercase text-left'>Current Password</span>

                                </div>
                                
                                <div className='form-field-input-container w-full rounded-[6px] h-[38px] bg-[#151515] border-[1px] border-[#565656] border-opacity-40 flex flex-row justify-center items-center'>

                                    <input className='form-field-input w-full h-full p-2 bg-transparent rounded-md outline-none text-white text-[12px]'
                                        type={confirmPasswordVisible ? 'text' : 'currentPassword'}
                                        readOnly
                                    />
                                    <div className=' h-[38px] w-[38px] rounded-bl-[6px] rounded-tl-[6px] justify-center items-center flex'>

                                        {currentPasswordVisible ? (
                                            <span
                                                className='text-[16px] text-[#565656] cursor-pointer '
                                                onClick={togglecurrentPasswordVisibility}
                                            >
                                                <Visibility />
                                            </span>
                                        ) : (
                                            <span
                                                className='text-[16px] text-[#565656] cursor-pointer'
                                                onClick={togglecurrentPasswordVisibility}
                                            >
                                                <VisibilityOff />
                                            </span>
                                        )}
                                    </div>
                                </div>

                            </div>

                            <Formik
                                initialValues={{

                                    newPassword: '',
                                    confirmPassword: '',
                                }}
                                validationSchema={PasswordSchema}
                                onSubmit={values => {
                                    console.log(values);
                                }}
                            >


                                {({ errors, touched }) => (
                                    <Form>
                                        <div className='flex flex-col md:w-1/2 mb-5'>



                                            <div className='form-field-container flex md:flex-row flex-col sm:mt-5 mt-2 w-full md:space-x-2 justify-between items-center'>
                                                <div className='form-field-label flex justify-between md:w-2/5 w-full'>
                                                    <span className='text-white text-[12px] uppercase'>New Password</span>

                                                </div>
                                                <div className='form-field-input-container w-full rounded-[6px] h-[38px] bg-[#151515] border-[1px] border-[#FFA524] flex flex-row justify-center items-center'>

                                                    <Field className='form-field-input w-full rounded-md h-full p-2 bg-transparent outline-none text-white text-[12px]'
                                                        type={passwordVisible ? 'text' : 'password'}
                                                        name='newPassword'
                                                        style={passwordStyle}
                                                        onBlur={() => handleBlur('password')}
                                                        required
                                                    />

                                                    <div className=' h-[38px] w-[38px] rounded-bl-[6px] rounded-tl-[6px] justify-center items-center flex'>

                                                        {passwordVisible ? (
                                                            <span
                                                                className='text-[16px] text-[#FFA524] cursor-pointer'
                                                                onClick={togglePasswordVisibility}
                                                            >
                                                                <Visibility />
                                                            </span>
                                                        ) : (
                                                            <span
                                                                className='text-[16px] text-[#FFA524] cursor-pointer'
                                                                onClick={togglePasswordVisibility}
                                                            >
                                                                <VisibilityOff />
                                                            </span>
                                                        )}
                                                    </div>

                                                </div>
                                                {errors.newPassword && touched.newPassword ? (
                                                    <span className='text-red-600 text-[12px]'>{errors.newPassword}</span>
                                                ) : null}

                                            </div>


                                            <div className='form-field-container flex md:flex-row flex-col sm:mt-5 mt-2 w-full md:space-x-2 justify-between items-center'>
                                                <div className='form-field-label flex justify-between md:w-2/5 w-full'>
                                                    <span className='text-white text-[12px] uppercase'>Confirm Password</span>

                                                </div>
                                                <div className='form-field-input-container w-full rounded-[6px] h-[38px] bg-[#151515] border-[1px] border-[#FFA524] flex flex-row justify-center items-center'>

                                                    <Field className='form-field-input w-full h-full p-2 bg-transparent rounded-md outline-none text-white text-[12px]'
                                                        type={confirmPasswordVisible ? 'text' : 'password'}
                                                        name='confirmPassword'
                                                        style={confirmPasswordStyle}
                                                        onBlur={() => handleBlur('confirmPassword')}
                                                        required
                                                    />
                                                    <div className=' h-[38px] w-[38px] rounded-bl-[6px] rounded-tl-[6px] justify-center items-center flex'>

                                                        {confirmPasswordVisible ? (
                                                            <span
                                                                className='text-[16px] text-[#FFA524] cursor-pointer'
                                                                onClick={toggleConfirmPasswordVisibility}
                                                            >
                                                                <Visibility />
                                                            </span>
                                                        ) : (
                                                            <span
                                                                className='text-[16px] text-[#FFA524] cursor-pointer'
                                                                onClick={toggleConfirmPasswordVisibility}
                                                            >
                                                                <VisibilityOff />
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                                {errors.confirmPassword && touched.confirmPassword ? (
                                                    <span className='text-red-600 text-[12px]'>{errors.confirmPassword}</span>
                                                ) : null}
                                            </div>

                                        </div>

                                    </Form>
                                )}


                            </Formik>

                        </div>



                    </div>


                    {/* <div className='flex flex-col w-full  md:space-x-[44px] mt-[44px]  space-x-0  relative border-[1px] border-[#565656] bg-[#151515] rounded-md'>

                        <div className='flex flex-row space-x-5 justify-start p-3 items-center'>
                            <span className='text-[#E08E20]'><VerifiedUser /></span>
                            <h2 className='text-[#C0C0C0] text-[12px] md:text-[14px] uppercase'>2 factor authentication</h2>
                        </div>


                        <div className='flex flex-col p-3 md:p-0  '>

                            <div className='flex flex-row justify-start items-start md:mt-3'>
                                <FormGroup>
                                    <FormControlLabel
                                        control={<Switch size="small" checked={checked} onChange={toggleChecked} />}
                                        label={checked ? "Enabled" : "Disabled"} className='text-[#ffa524]'
                                    />

                                </FormGroup>
                            </div>


                            <Formik
                                initialValues={{

                                    email: '',
                                    confirmemail: '',
                                }}
                                validationSchema={authSchema}
                                onSubmit={values => {
                                    console.log(values);
                                }}
                            >


                                {({ errors, touched }) => (
                                    <Form>
                                        <div className='flex flex-col md:w-1/2 mb-5 w-full'>



                                            <div className='form-field-container flex flex-row sm:mt-5 mt-2  md:space-x-2 justify-between items-center'>
                                                <div className='form-field-label sm:flex justify-between w-2/5 hidden '>
                                                    <span className='text-white text-[12px] uppercase '>Email</span>
                                                    {errors.email && touched.email ? (
                                                        <span className='text-red-600 text-[12px]'>{errors.email}</span>
                                                    ) : null}

                                                </div>
                                                <div className='form-field-input-container w-full rounded-[6px] h-[38px] bg-[#151515] border-[1px] border-[#FFA524] flex flex-row justify-center items-center'>

                                                    <Field type="text"
                                                        name='email'
                                                        style={emailStyle}
                                                        onBlur={() => handleBlur('email')}
                                                        placeholder='Email'
                                                        className=' w-full h-full rounded-md p-2 bg-transparent outline-none text-white text-[12px] form-field-input'
                                                        required
                                                    />

                                                </div>
                                                {errors.email && touched.email ? (
                                                    <span className='text-red-600 text-[12px] block sm:hidden'>{errors.email}</span>
                                                ) : null}
                                            </div>

                                            <div className='form-field-container flex flex-row sm:mt-5 mt-2  md:space-x-2 justify-between items-center'>
                                                <div className='form-field-label sm:flex justify-between w-2/5 hidden '>
                                                    <span className='text-white text-[12px] uppercase '>Confirm Email</span>
                                                    {errors.confirmemail && touched.confirmemail ? (
                                                        <span className='text-red-600 text-[12px]'>{errors.confirmemail}</span>
                                                    ) : null}

                                                </div>
                                                <div className='form-field-input-container w-full rounded-[6px] h-[38px] bg-[#151515] border-[1px] border-[#FFA524] flex flex-row justify-center items-center'>

                                                    <Field type="text"
                                                        name='confirmemail'
                                                        style={confirmemailStyle}
                                                        onBlur={() => handleBlur('confirmemail')}
                                                        placeholder='Confirm Email'
                                                        className=' w-full h-full rounded-md p-2 bg-transparent outline-none text-white text-[12px] form-field-input'
                                                        required
                                                    />

                                                </div>

                                                {errors.confirmemail && touched.confirmemail ? (
                                                    <span className='text-red-600 text-[12px] block sm:hidden'>{errors.confirmemail}</span>
                                                ) : null}
                                            </div>
                                            <div className='flex justify-start items-start mt-5 w-full md:w-auto'>
                                                <button className='py-2 font-semibold px-4 text-[10px] md:text-[14px] text-[#151515] bg-gradient-to-r from-[#ffd62d] to-[#ffa524] rounded-sm uppercase w-full md:w-auto'>
                                                    Verify
                                                </button>
                                            </div>






                                        </div>

                                    </Form>
                                )}


                            </Formik>

                        </div>



                    </div> */}




                    {/* <div className='flex flex-col w-full  md:space-x-[44px] mt-[44px]  space-x-0  relative border-[1px] border-[#565656] bg-[#151515] rounded-md'>

                        <div className='flex flex-row space-x-5 justify-start p-3 items-center'>
                            <span className='text-[#E08E20]'><CurrencyBitcoin /></span>
                            <h2 className='text-[#C0C0C0] text-[12px] md:text-[14px] uppercase'>Link Binance</h2>
                        </div>


                        <div className='flex flex-col p-3 md:p-0'>

                            

                            <Formik
                                initialValues={{

                                    bnbId: '',
                                    
                                }}
                                validationSchema={BnB}
                                onSubmit={values => {
                                    console.log(values);
                                }}
                            >


                                {({ errors, touched }) => (
                                    <Form>
                                        <div className='flex md:flex-row md:w-1/2 mb-5 md:space-x-5 flex-col w-full'>



                                            <div className='form-field-container flex flex-row sm:mt-5 mt-2  md:space-x-2 justify-between items-center w-full'>
                                                <div className='form-field-label sm:flex justify-between md:w-2/5 w-full hidden '>
                                                    <span className='text-white text-[12px] uppercase '>Binance Wallete ID</span>
                                                    {errors.bnbId && touched.bnbId ? (
                                                        <span className='text-red-600 text-[12px]'>{errors.bnbId}</span>
                                                    ) : null}

                                                </div>
                                                <div className='form-field-input-container w-full rounded-[6px] h-[38px] bg-[#151515] border-[1px] border-[#FFA524] flex flex-row justify-center items-center'>

                                                    <Field type="text"
                                                        name='bnbId'
                                                        style={BnBStyle}
                                                        onBlur={() => handleBlur('bnbId')}
                                                        placeholder='Binance Id'
                                                        className=' w-full h-full rounded-md p-2 bg-transparent outline-none text-white text-[12px] form-field-input'
                                                        required
                                                    />

                                                </div>
                                                {errors.bnbId && touched.bnbId ? (
                                                    <span className='text-red-600 text-[12px] block sm:hidden'>{errors.bnbId}</span>
                                                ) : null}
                                            </div>
                                            <div className='flex justify-start items-start mt-5 w-full md:w-auto'>
                                                <button className='py-2 w-full md:w-auto font-semibold px-4 text-[10px] md:text-[14px] text-[#151515] bg-gradient-to-r from-[#ffd62d] to-[#ffa524] rounded-sm uppercase'>
                                                    Verify
                                                </button>
                                            </div>


                                            
                                            





                                        </div>

                                    </Form>
                                )}


                            </Formik>

                        </div>



                    </div> */}






                    <div>

                    </div>


                </div>
                <div className='w-full h-full absolute object-center -z-20 '>
                    <AnimatedImage />
                </div>
            </div>
        </div>
    );
}

export default Security;