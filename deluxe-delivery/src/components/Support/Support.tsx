"use client";

import React, {useState} from "react";

const Support = () => {

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Add your form submission logic here if needed
        // For demonstration purposes, just setting the submitted flag
        setSubmitted(true);
    };

    const resetForm = () => {
        // Reset the form or perform any necessary cleanup
        setSubmitted(false);
    };


    return (
        <div className="h-screen w-screen flex items-center justify-center bg-white">
            {!submitted ? (
                <form onSubmit={handleSubmit} className="flex-auto max-w-md h-100 m-auto mt-10">
                    <div>
                        <h1> Contact Us </h1>
                        <p> Have a question? We're here to answer it.
                            Give us all the details in the form below. </p>
                    </div>
                    <div>
                        <label className="block mt-5 mb-2 text-sm text-gray-600">Email address</label>
                        <input type="email" placeholder="johnsnow@example.com" required
                               className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-[#5752DA] focus:ring-[#5752DA] focus:outline-none focus:ring focus:ring-opacity-40"/>
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-600">Full name</label>
                        <input type="text" placeholder="John Snow" required
                               className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-[#5752DA] focus:ring-[#5752DA] focus:outline-none focus:ring focus:ring-opacity-40"/>
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-600">Phone number (Optional)</label>
                        <input type="text" placeholder="XXX-XXX-XXXX"
                               className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-[#5752DA] focus:ring-[#5752DA] focus:outline-none focus:ring focus:ring-opacity-40"/>
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-600">Company (Optional)</label>
                        <input type="text" placeholder="Snow Inc."
                               className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-[#5752DA] focus:ring-[#5752DA] focus:outline-none focus:ring focus:ring-opacity-40"/>
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-600">Delivery number (Optional)</label>
                        <input type="text" placeholder="XXXX-XXXX-XXXX-XXXX"
                               className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-[#5752DA] focus:ring-[#5752DA] focus:outline-none focus:ring focus:ring-opacity-40"/>
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-600">Subject</label>
                        <input type="text" placeholder="I never received my package" required
                               className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-[#5752DA] focus:ring-[#5752DA] focus:outline-none focus:ring focus:ring-opacity-40"/>
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-600">Message</label>
                        <textarea type="text" placeholder="Yap" required
                                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-[#5752DA] focus:ring-[#5752DA] focus:outline-none focus:ring focus:ring-opacity-40"/>
                    </div>
                    <div>

                        <label className="block mt-5 mb-2 text-sm text-gray-600">Upload file (Optional)</label>
                        <input
                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                            aria-describedby="file_input_help" id="file_input" type="file"></input>

                        <p className="mt-1 text-sm text-gray-500"
                           id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>

                    </div>

                    <button type="submit" className="flex items-center mt-10 justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#5752DA] rounded-lg hover:bg-[#5752DA] focus:outline-none focus:ring focus:ring-[#5752DA] focus:ring-opacity-50">
                        <span>Submit </span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                        </svg>
                    </button>
                </form>
            ) : (
                <div className="flex-auto max-w-md h-100 m-auto mt-10 text-center">
                    <h2>Thank you for your comments!</h2>
                    <p>We will get back to you shortly.</p>
                    <button onClick={resetForm} className="mt-4 px-4 py-2 bg-gray-300 rounded-lg">Close</button>
                </div>
            )}
        </div>
    );
};

export default Support;

