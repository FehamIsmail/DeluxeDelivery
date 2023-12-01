"use client";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import React, {useState} from "react";


const NewItem = () => {

    const[goToPay, setGoToPay] = useState(false);

    const [recipientName, setRecipientName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [packageLength, setPackageLength] = useState('');
    const [packageWidth, setPackageWidth] = useState('');
    const [packageHeight, setPackageHeight] = useState('');
    const [packageWeight, setPackageWeight] = useState('');
    const [deliveryOption, setDeliveryOption] = useState('standard');


    const [showQuotation, setShowQuotation] = useState(false);
    const [quotationDetails, setQuotationDetails] = useState<any>({});

    const [buttonText, setButtonText] = useState('Calculate');


    const handleRecipientNameChange = (event: any) => {
        setRecipientName(event.target.value);
    }

    const handleQuantityChange = (event: any) => {
        setQuantity(event.target.value);
    }

    const handlePackageWeightChange = (event: any) => {
        setPackageWeight(event.target.value);
    }

    const handlePackageLengthChange = (event: any) => {
        setPackageLength(event.target.value);
    }

    const handlePackageWidthChange = (event: any) => {
        setPackageWidth(event.target.value);
    }

    const handlePackageHeightChange = (event: any) => {
        setPackageHeight(event.target.value);
    }


    const handleDeliveryOptionChange = (selectedOption: string) => {
        setDeliveryOption(selectedOption);
    };


    const handleSubmit = async (event: any) => {
        event.preventDefault();

        if (buttonText === 'Calculate') {
            setGoToPay(false);
        } else if (buttonText === 'Pay Now') {
            setGoToPay(true);
        }

        const preQuotation = {
            packagingFee: packageLength * packageWidth * packageHeight * 3,
            baseDeliveryFee: packageLength * packageWidth * packageHeight * 3 + packageWeight * 2,
            deliveryFee: deliveryOption === 'standard' ? 0 : 20,
        };

        const quotation = {
            packagingFee: preQuotation.packagingFee,
            baseDeliveryFee: preQuotation.baseDeliveryFee,
            serviceFee: 5,
            deliveryOption: deliveryOption === 'standard' ? 'Standard Delivery' : 'Express Delivery',
            subtotal: (preQuotation.packagingFee + preQuotation.baseDeliveryFee + 5 + preQuotation.deliveryFee) * quantity,
            qst: (preQuotation.packagingFee + preQuotation.baseDeliveryFee + 5) * 0.09975 * quantity,
            gst: (preQuotation.packagingFee + preQuotation.baseDeliveryFee + 5) * 0.05 * quantity,
            total: (preQuotation.packagingFee + preQuotation.baseDeliveryFee + 5) * (1 + 0.09975 + 0.05) * quantity,
            deliveryInfo: 'Expected delivery date: February 23, 2024',
        };

        setQuotationDetails(quotation);
        setShowQuotation(true);

        setButtonText('Pay Now');



    };
    return (
        <main className="bg-white min-h-screen items-center">
            <Header page={'OTHER'}/>

            {!goToPay ? (  <div className="flex flex-col min-h-screen">
                    <form onSubmit={handleSubmit}>
                        <div className="max-w-xl ml-10 mt-5 bg-white rounded-md shadow-lg p-6">

                            <div className="flex flex-col space-y-6">

                                <fieldset className="border border-gray-300 p-4 rounded-md">
                                    <legend className="text-lg font-bold text-[#5752DA] mb-2">Item Details</legend>

                                    <div className="flex flex-col space-y-4">
                                        <div className="mb-4">
                                            <label htmlFor="itemName" className="block text-sm font-semibold mb-1">Item
                                                Name</label>
                                            <input type="text" required
                                                   className="border border-gray-300 rounded-md p-2 w-full"/>
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="itemDescription"
                                                   className="block text-sm font-semibold mb-1">Item
                                                Description</label>
                                            <input type="text" required
                                                   className="border border-gray-300 rounded-md p-2 w-full"/>
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="itemQuantity" className="block text-sm font-semibold mb-1">Item
                                                Quantity</label>
                                            <input type="number" value={quantity} onChange={handleQuantityChange} required
                                                   className="border border-gray-300 rounded-md p-2 w-full"/>
                                        </div>
                                    </div>
                                </fieldset>


                                <fieldset className="border border-gray-300 p-4 rounded-md">
                                    <legend className="text-lg font-bold text-[#5752DA] mb-2">Recipient Information
                                    </legend>

                                    <div className="flex flex-col space-y-4">
                                        <div className="mb-4">
                                            <label htmlFor="recipientName"
                                                   className="block text-sm font-semibold mb-1">Name</label>
                                            <input type="text" value={recipientName}
                                                   onChange={handleRecipientNameChange} required
                                                   className="border border-gray-300 rounded-md p-2 w-full"/>
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="recipientEmail"
                                                   className="block text-sm font-semibold mb-1">Email
                                                Address</label>
                                            <input type="email" required
                                                   className="border border-gray-300 rounded-md p-2 w-full"/>
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="recipientAddress"
                                                   className="block text-sm font-semibold mb-1">Address
                                                and Phone</label>
                                            <input type="text" required
                                                   className="border border-gray-300 rounded-md p-2 w-full"/>
                                        </div>
                                    </div>
                                </fieldset>


                                <fieldset className="border border-gray-300 p-4 rounded-md">
                                    <legend className="text-lg font-bold text-[#5752DA] mb-2">Package Details</legend>

                                    <div className="flex flex-col space-y-4">
                                        <div className="mb-4">
                                            <label htmlFor="packageLength"
                                                   className="block text-sm font-semibold mb-1">Length (m)</label>
                                            <input type="number" value={packageLength}
                                                   onChange={handlePackageLengthChange} required
                                                   className="border border-gray-300 rounded-md p-2 w-full"/>
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="packageWidth"
                                                   className="block text-sm font-semibold mb-1">Width (m)</label>
                                            <input type="number" value={packageWidth}
                                                   onChange={handlePackageWidthChange} required
                                                   className="border border-gray-300 rounded-md p-2 w-full"/>
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="packageHeight"
                                                   className="block text-sm font-semibold mb-1">Height (m)</label>
                                            <input type="number" value={packageHeight}
                                                   onChange={handlePackageHeightChange} required
                                                   className="border border-gray-300 rounded-md p-2 w-full"/>
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="packageWeight"
                                                   className="block text-sm font-semibold mb-1">Weight (kg)</label>
                                            <input type="number" value={packageWeight}
                                                   onChange={handlePackageWeightChange} required
                                                   className="border border-gray-300 rounded-md p-2 w-full"/>
                                        </div>
                                    </div>
                                </fieldset>

                                <fieldset className="border border-gray-300 p-4 rounded-md">
                                    <legend className="text-lg font-bold text-[#5752DA] mb-2">Delivery Option</legend>
                                    <div className="flex flex-col space-y-4">
                                        <div className="flex items-center mb-2">
                                            <input
                                                type="radio"
                                                value="standard"
                                                onChange={() => handleDeliveryOptionChange('standard')}
                                                checked={deliveryOption === 'standard'}
                                                className="mr-2"
                                                id="standardDelivery"
                                            />
                                            <label htmlFor="standardDelivery" className="mr-4">Standard Delivery</label>

                                            <input
                                                type="radio"
                                                value="express"
                                                onChange={() => {
                                                    handleDeliveryOptionChange('express');
                                                    if (deliveryOption === 'standard') {
                                                        handleDeliveryOptionChange('express');
                                                    }
                                                }}
                                                checked={deliveryOption === 'express'}
                                                className="mr-2"
                                                id="expressDelivery"
                                            />
                                            <label htmlFor="expressDelivery">Express Delivery</label>
                                        </div>
                                    </div>
                                </fieldset>

                            </div>

                        </div>

                        <div className="flex justify-end px-[35px] py-3.5">
                            <button
                                type="submit" // Trigger form submission
                                className="bg-amber-500 rounded-[15px] text-[17px] font-semibold hover:bg-indigo-600 text-white py-2 px-4 mb-4 mr-4"
                            >
                                {buttonText}
                            </button>
                        </div>
                    </form>





                    {showQuotation && (


                        <div className="w-[508px] h-[659px] bg-white rounded-md shadow-lg p-6 absolute bottom-20 right-10 flex flex-col justify-between">

                            <div className="w-full h-[67px] bg-neutral-100 rounded-bl-[13px] rounded-br-[13px] text-white rounded-md p-4 flex items-center justify-center">
                                <div className="w-[393px] h-[38.16px] text-indigo-500 text-[32px] font-medium leading-tight text-center">
                                    Quotation Proposal
                                </div>
                            </div>



                            <div className="flex flex-row justify-between">
                                <div className="flex flex-col items-start text-zinc-700 text-xl font-normal leading-tight">
                                    <p className="mx-2 mb-6 mt-6">Packaging Fee:</p>
                                    <p className="mx-2 mb-6">Base Delivery Fee:</p>
                                    <p className="mx-2 mb-6">Service Fee:</p>
                                    <p className="mx-2 mb-6">Subtotal before taxes:</p>
                                    <p className="mx-2 mb-6">QST:</p>
                                    <p className="mx-2 mb-6">GST:</p>
                                </div>

                                <div className="flex flex-col items-end text-zinc-700 text-xl font-normal leading-tight">
                                    <p className="mx-2 mb-6 mt-6">{Math.round(quotationDetails.packagingFee * 100) / 100} $</p>
                                    <p className="mx-2 mb-6">{Math.round(quotationDetails.baseDeliveryFee * 100) / 100} $</p>
                                    <p className="mx-2 mb-6">{Math.round(quotationDetails.serviceFee * 100) / 100} $</p>
                                    <p className="mx-2 mb-6">{Math.round(quotationDetails.subtotal * 100) / 100} $</p>
                                    <p className="mx-2 mb-6">{Math.round(quotationDetails.qst * 100) / 100} $</p>
                                    <p className="mx-2 mb-6">{Math.round(quotationDetails.gst * 100) / 100} $</p>
                                </div>
                            </div>

                            <div className="w-full h-[67px] bg-indigo-600 rounded-bl-[13px] rounded-br-[13px] text-white rounded-md p-4 flex items-center justify-center">
                                <div className="w-[393px] h-[38.16px] text-white text-[32px] leading-tight text-center">
                                    Total: {Math.round(quotationDetails.total * 100) / 100} $
                                </div>
                            </div>

                            <div className="w-full h-[67px] bg-neutral-100 rounded-bl-[13px] rounded-br-[13px] text-white rounded-md p-4 mt-3 flex items-center justify-center">
                                <div className="w-[393px] h-[38.16px] text-indigo-500 text-[32px] font-medium leading-tight text-center">
                                    Delivery Info
                                </div>
                            </div>

                            <div className="flex flex-row justify-between">
                                <div className="flex flex-col items-start text-zinc-700 text-xl font-normal leading-tight">
                                    <p className="mx-2 mt-6">Delivery Date:</p>
                                </div>

                                <div className="flex flex-col items-end text-zinc-700 text-xl font-normal leading-tight">
                                    <p className="mx-2 mt-6">23/02/2023</p>
                                </div>
                            </div>


                        </div>



                    )}

                </div>




            ) : (
                <div>
                    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Payment Successful!</h2>
                            <p className="text-gray-600 mb-4">
                                Thank you for your payment. Your transaction has been successfully processed.
                            </p>
                            <div className="flex justify-end mt-6">
                                <a href="/">
                                <button className="bg-indigo-600 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
                                    Back to Home
                                </button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

            )}

            <Footer/>
        </main>
        );

    };



export default NewItem;

