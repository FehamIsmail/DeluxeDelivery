"use client";

import React, {useState} from 'react';
import connection from "../../supabase/supabase"

const SignUp = () => {

    const supabase = connection

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value)
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value)
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    first_name: firstName,
                    last_name: lastName,
                    phone_number: phone,
                },
            },
        })

        console.log('Submitted:', {firstName, lastName, phone, email, password, confirmPassword})

    };


    return (
        <div>

            <div className="mt-6">
                <h1 className="text-gray-500">Select type of account</h1>

                <div className="mt-3 md:flex md:items-center md:-mx-2">

                    <button
                        className="flex justify-center w-full px-6 py-3 mt-4 text-[#5752DA] border border-[#5752DA] rounded-lg md:mt-0 md:w-auto md:mx-2 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                        </svg>

                        <span className="mx-2">
                                customer
                            </span>
                    </button>

                    <button
                        className="flex justify-center w-full px-6 py-3 text-white bg-[#5752DA] rounded-lg md:w-auto md:mx-2 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>

                        <span className="mx-2">
                                deliverer
                            </span>
                    </button>

                </div>
            </div>


            <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2" onSubmit={handleSubmit}>
                <div>
                    <label className="block mb-2 text-sm text-gray-600">First
                        Name</label>
                    <input type="text" placeholder="John" value={firstName} onChange={handleFirstNameChange} required
                           className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-[#5752DA] focus:ring-[#5752DA] focus:outline-none focus:ring focus:ring-opacity-40"/>
                </div>

                <div>
                    <label className="block mb-2 text-sm text-gray-600">Last
                        name</label>
                    <input type="text" placeholder="Snow" value={lastName} onChange={handleLastNameChange} required
                           className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-[#5752DA] focus:ring-[#5752DA] focus:outline-none focus:ring focus:ring-opacity-40"/>
                </div>

                <div>
                    <label className="block mb-2 text-sm text-gray-600">Phone
                        number</label>
                    <input type="text" placeholder="XXX-XX-XXXX-XXX" value={phone} onChange={handlePhoneChange} required
                           className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-[#5752DA] focus:ring-[#5752DA] focus:outline-none focus:ring focus:ring-opacity-40"/>
                </div>

                <div>
                    <label className="block mb-2 text-sm text-gray-600">Email
                        address</label>
                    <input type="email" placeholder="johnsnow@example.com" value={email} onChange={handleEmailChange} required
                           className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-[#5752DA] focus:ring-[#5752DA] focus:outline-none focus:ring focus:ring-opacity-40"/>
                </div>

                <div>
                    <label
                        className="block mb-2 text-sm text-gray-600">Password</label>
                    <input type="password" placeholder="Enter your password" value={password} onChange={handlePasswordChange} required
                           className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-[#5752DA] focus:ring-[#5752DA] focus:outline-none focus:ring focus:ring-opacity-40"/>
                </div>

                <div>
                    <label className="block mb-2 text-sm text-gray-600">Confirm
                        password</label>
                    <input type="password" placeholder="Enter your password" name={"confirmPassword"} onChange={handleConfirmPasswordChange} required
                           className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-[#5752DA]  focus:ring-[#5752DA] focus:outline-none focus:ring focus:ring-opacity-40"/>
                </div>

                <button type={"submit"}
                    className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#5752DA] rounded-lg hover:bg-[#5752DA] focus:outline-none focus:ring focus:ring-[#5752DA] focus:ring-opacity-50">
                    <span>Sign Up </span>

                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100"
                         viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"/>
                    </svg>
                </button>
            </form>

        </div>
    )
}

export default SignUp
