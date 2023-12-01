"use client";
import React, {useEffect, useState} from 'react';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function FeedbackPage({ params }: { params: { id: number } }) {
    const id = params.id;

    return (
        <>
            <Header page={'OTHER'} />
            <Feedback />
            <Footer />
        </>
    );
}

function Feedback() {
    const [rating, setRating] = useState<number | null>(null);
    const [description, setDescription] = useState<string>('');
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleRatingChange = (value: number) => {
        setRating(value);
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value);
    };

    const handleSubmit = () => {
        // Here you can handle the submission logic, e.g., send data to a server
        // For simplicity, we'll just show a confirmation message
        setSubmitted(true);
    };

    useEffect(() => {
        console.log(rating)
    },[rating])

    return (
        <div className="container mx-auto mt-8 h-[820px]">
            <h2 className="text-2xl font-bold mb-4">Delivery Service Feedback</h2>
            {!submitted ? (
                <form className="max-w-lg mx-auto rounded-xl bg-white p-8 shadow-xl mt-40">
                    <div className="mb-2">
                        <label className="block text-gray-700">Rate our delivery service:</label>
                        {[1, 2, 3, 4, 5].map((value) => (
                            <label key={value} className="inline-flex items-center mr-4">
                                <input
                                    type="radio"
                                    name="rating"
                                    value={value}
                                    checked={rating === value}
                                    onChange={() => handleRatingChange(value)}
                                    className="form-radio text-blue-500"
                                />
                                <span className="ml-2">{value} star{value !== 1 && 's'}</span>
                            </label>
                        ))}
                    </div>

                    <div className="-ml-1 flex items-center">
                        {rating && Array.from({ length: rating }).map((_, index) => (
                            <svg key={index} className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                        ))}
                        {rating && (
                            Array.from({ length: Math.max(0, 5 - rating) }).map((_, index) => (
                                <svg key={index} className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                            ))
                        )}
                        {!rating && (
                            <>
                                <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                                <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                                <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                                <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                                <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                            </>
                        )}
                    </div>
                    <div className={"text-md my-2"}>
                        {rating == 1 && 'Very bad'}
                        {rating == 2 && 'Bad'}
                        {rating == 3 && 'Average'}
                        {rating == 4 && 'Good'}
                        {rating == 5 && 'Excellent'}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Optional description:</label>
                        <textarea
                            value={description}
                            onChange={handleDescriptionChange}
                            placeholder="Provide additional feedback..."
                            className="form-input mt-1 block w-full h-[60px] align-top border-[1px] p-2"
                        />
                    </div>
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                    >
                        Submit Feedback
                    </button>
                </form>
            ) : (
                <div className="mt-40 text-green-500 text-center text-3xl font-semibold">
                    <p>Thank you for your feedback!</p>
                </div>
            )}
        </div>
    );
}
