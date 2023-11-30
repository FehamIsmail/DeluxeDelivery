import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import React from "react";

export default function newItem() {
    return (
        <main className="bg-white min-h-screen items-center">
            <Header page={'OTHER'}/>

            <div className="max-w-xl ml-10 mt-5">

                <div className="flex flex-col space-y-6">


                    <fieldset className="border border-gray-300 p-4 rounded-md">
                        <legend className="text-lg font-bold text-[#5752DA] mb-2">Item Details</legend>

                        <div className="flex flex-col space-y-4">
                            <div className="mb-4">
                                <label htmlFor="itemName" className="block text-sm font-semibold mb-1">Item Name</label>
                                <input type="text" id="itemName"
                                       className="border border-gray-300 rounded-md p-2 w-full"></input>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="itemDescription" className="block text-sm font-semibold mb-1">Item
                                    Description</label>
                                <input type="text" id="itemDescription"
                                       className="border border-gray-300 rounded-md p-2 w-full"></input>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="itemQuantity" className="block text-sm font-semibold mb-1">Item
                                    Quantity</label>
                                <input type="number" id="itemQuantity"
                                       className="border border-gray-300 rounded-md p-2 w-full"></input>
                            </div>
                        </div>
                    </fieldset>


                    <fieldset className="border border-gray-300 p-4 rounded-md">
                        <legend className="text-lg font-bold text-[#5752DA] mb-2">Recipient Information</legend>

                        <div className="flex flex-col space-y-4">
                            <div className="mb-4">
                                <label htmlFor="recipientName" className="block text-sm font-semibold mb-1">Name</label>
                                <input type="text" id="recipientName"
                                       className="border border-gray-300 rounded-md p-2 w-full"></input>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="recipientEmail" className="block text-sm font-semibold mb-1">Email
                                    Address</label>
                                <input type="email" id="recipientEmail"
                                       className="border border-gray-300 rounded-md p-2 w-full"></input>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="recipientAddress" className="block text-sm font-semibold mb-1">Address
                                    and Phone</label>
                                <input type="text" id="recipientAddress"
                                       className="border border-gray-300 rounded-md p-2 w-full"></input>
                            </div>
                        </div>
                    </fieldset>


                    <fieldset className="border border-gray-300 p-4 rounded-md">
                        <legend className="text-lg font-bold text-[#5752DA] mb-2">Package Details</legend>

                        <div className="flex flex-col space-y-4">
                            <div className="mb-4">
                                <label htmlFor="packageLength"
                                       className="block text-sm font-semibold mb-1">Length</label>
                                <input type="number" id="packageLength"
                                       className="border border-gray-300 rounded-md p-2 w-full"></input>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="packageWidth" className="block text-sm font-semibold mb-1">Width</label>
                                <input type="number" id="packageWidth"
                                       className="border border-gray-300 rounded-md p-2 w-full"></input>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="packageHeight"
                                       className="block text-sm font-semibold mb-1">Height</label>
                                <input type="number" id="packageHeight"
                                       className="border border-gray-300 rounded-md p-2 w-full"></input>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="packageWeight"
                                       className="block text-sm font-semibold mb-1">Weight</label>
                                <input type="number" id="packageWeight"
                                       className="border border-gray-300 rounded-md p-2 w-full"></input>
                            </div>
                        </div>
                    </fieldset>


                    <fieldset className="border border-gray-300 p-4 rounded-md">
                        <legend className="text-lg font-bold text-[#5752DA] mb-2">Delivery Option</legend>

                        <div className="flex flex-col space-y-4">
                            <div className="flex items-center mb-2">
                                <input type="radio" id="standardDelivery" name="deliveryOption" value="standard"
                                       className="mr-2"></input>
                                    <label htmlFor="standardDelivery" className="mr-4">Standard Delivery</label>

                                    <input type="radio" id="expressDelivery" name="deliveryOption" value="express"
                                           className="mr-2"></input>
                                        <label htmlFor="expressDelivery">Express Delivery</label>
                            </div>
                        </div>
                    </fieldset>

                </div>


            </div>


            <div className="fixed bottom-1 right-0 m-4 px-[35px]  py-3.5 bg-amber-500 rounded-[15px] justify-center items-center gap-2.5 inline-flex">
                <div className="text-center text-white text-[17px] font-semibold">Calculate</div>
            </div>







            <Footer/>

        </main>
    )
}

