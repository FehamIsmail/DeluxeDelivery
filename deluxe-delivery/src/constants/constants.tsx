import {ChatBoxProps} from "@/components/Chat/ChatBox";

export const CHATBOX_ITEMS = (handleChatboxToggle: () => void): ChatBoxProps[] => {
    return(
    [
        {
            messages: [
                { id: 1, text: "Hi there! Just checking in on the delivery status.", sender: 'user' },
                { id: 2, text: "Hello! Your package is currently out for delivery.", sender: 'other' },
                { id: 3, text: "It should arrive by end of day.", sender: 'other' },
                { id: 4, text: "Can you leave the package by the front door?", sender: 'user' },
                { id: 5, text: "Absolutely!", sender: 'other' },
                { id: 6, text: "Your package is in transit and will be at your front door shortly.", sender: 'other' },
                { id: 7, text: "Thanks! I appreciate the update.", sender: 'user' },
            ],
            sender: "Chris Smith",
            isChatboxOpen: true,
            handleChatboxToggle: handleChatboxToggle,
        },
        {
            messages: [
                { id: 1, text: "Hi Jay!", sender: 'user' },
                { id: 2, text: "When can I expect my package to arrive?", sender: 'user' },
                { id: 3, text: "Your package is scheduled for delivery today.", sender: 'other' },
                { id: 4, text: "Please leave the package at the reception desk.", sender: 'user' },
                { id: 5, text: "Sure thing!", sender: 'other' },
                { id: 6, text: "I'll make sure it's left at the reception.", sender: 'other' },
                { id: 7, text: "Great! Thank you!", sender: 'user' },
            ],
            sender: "Jay Lorian",
            isChatboxOpen: true,
            handleChatboxToggle: handleChatboxToggle,
        },
        {
            messages: [
                { id: 1, text: "Hey Marie, any updates on my delivery?", sender: 'user' },
                { id: 2, text: "Yes, your package is on its way.", sender: 'other' },
                { id: 3, text: "It should be delivered within the next hour.", sender: 'other' },
                { id: 4, text: "Could you place the package in the backyard?", sender: 'user' },
                { id: 5, text: "Certainly! I'll make sure it's left in the backyard per your request.", sender: 'other' },
                { id: 6, text: "Thanks, Marie! I'll keep an eye out.", sender: 'user' },
            ],
            sender: "Marie Gold",
            isChatboxOpen: true,
            handleChatboxToggle: handleChatboxToggle,
        },
        {
            messages: [
                { id: 1, text: "Hello John! Can you confirm the delivery time for my order?", sender: 'user' },
                { id: 2, text: "Certainly!", sender: 'other' },
                { id: 3, text: "Your package is expected to arrive between 2:00 PM and 4:00 PM.", sender: 'other' },
                { id: 4, text: "Please leave the package by the garage entrance.", sender: 'user' },
                { id: 5, text: "Got it! I'll ensure the package is left by the garage entrance as requested.", sender: 'other' },
                { id: 6, text: "Thanks, John! I appreciate your help.", sender: 'user' },
            ],
            sender: "John Doe",
            isChatboxOpen: true,
            handleChatboxToggle: handleChatboxToggle,
        },
    ])
}
