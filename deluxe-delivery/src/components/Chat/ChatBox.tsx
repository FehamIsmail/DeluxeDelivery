import React, {useEffect, useState} from 'react';
import {ChevronDownIcon, ChevronUpIcon} from "@heroicons/react/24/outline";

export interface ChatBoxProps {
    messages?: { id: number; text: string; sender: 'user' | 'other' }[];
    sender: string,
    isChatboxOpen: boolean;
    handleChatboxToggle: () => void;
}
function ChatBox(props: ChatBoxProps) {
    const [messages, setMessages] = useState(props.messages || [])

    const {isChatboxOpen, handleChatboxToggle} = props;

    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            setMessages([
                ...messages,
                { id: messages.length + 1, text: newMessage, sender: 'user' },
            ]);
            setNewMessage('');
        }
    };

    useEffect(() => {
        // update messages
        setMessages(props.messages || [])
    },[props])

    return (
        <div className={`max-w-md bg-white rounded-t-xl mx-auto overflow-hidden shadow-md 
            ${isChatboxOpen ? 'h-[490px]  ' : 'h-12 translate-y-[442px] border-[2px] border-gray-200'}
            `}>
            <div className={`header border-b-[1px] cursor-pointer  border-gray-200 h-12 flex flex-row`}
                onClick={handleChatboxToggle}
            >
                <div className="text-zinc-800 text-xs font-extralight font-['Inter'] leading-3 mx-auto my-auto">{props.sender}</div>
                {isChatboxOpen  &&  <ChevronDownIcon className={"relative text-gray-500 h-7 pr-4 pt-4"}/>}
                {!isChatboxOpen && <ChevronUpIcon   className={"relative text-gray-500 h-7 pr-4 pt-4"}/>}
            </div>
            <div className="flex flex-col h-96 p-4 overflow-y-scroll">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`mb-2 ${
                            message.sender === 'user' ? 'text-right' : 'text-left'
                        }`}
                    >
            <span
                className={`inline-block px-3 py-1 rounded-lg w-fit ${
                    message.sender === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-700'
                }`}
            >
              {message.text}
            </span>
                    </div>
                ))}
            </div>
            <div className="flex p-2 border-t border-gray-300">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="flex-grow p-2 mr-2 border rounded-md focus:outline-none"
                    placeholder="Type a message..."
                />
                <button
                    onClick={handleSendMessage}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                >
                    Send
                </button>
            </div>
        </div>
    );
}

export default ChatBox;
