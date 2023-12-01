"use client"
import React, {useEffect} from 'react';
import CarPing from "@/app/dashboard/tracking/CarPing";
import HousePing from "@/app/dashboard/tracking/HousePing";
import HouseCard from "@/app/dashboard/tracking/HouseCard";
import DelivererCard from "@/app/dashboard/tracking/DelivererCard";
import ChatBox, {ChatBoxProps} from "@/components/Chat/ChatBox";
import {XMarkIcon} from "@heroicons/react/24/outline";
import {CHATBOX_ITEMS} from "@/constants/constants";

function TrackingContent() {

    const [isCardVisible, setIsCardVisible] = React.useState<boolean[]>([false,false,false,false]);
    const [isChecked, setChecked] = React.useState(false);
    const [mapImg, setMapImg] = React.useState("/map.png");
    const [isChatVisible, setIsChatVisible] = React.useState(false);
    const [isChatBoxOpen, setIsChatBoxOpen] = React.useState(true);
    const [chatBoxIndex, setChatBoxIndex] = React.useState(0);
    const [takenItems, setTakenItems] = React.useState<any[]>([])


    const handleChatboxToggle = () => {
        setIsChatBoxOpen(!isChatBoxOpen);
    }

    const getOpenedHouseCard = () => {
        for (let i = 0; i < isCardVisible.length; i++) {
            if (isCardVisible[i]) {
                return i;
            }
        }
        return -1;
    }

    const [chatBox, setChatBox] = React.useState<ChatBoxProps[]>(CHATBOX_ITEMS(handleChatboxToggle));


    const toggleVisible = (index: number) => {
        // allows 1 house card to be visible at a time
        // allows also no house card to be visible
        return () => {
            let newIsVisible = [false,false,false,false];
            newIsVisible[index] = !isCardVisible[index];
            setIsCardVisible(newIsVisible);
        }
    }

    const closeChatBox = () => {
        setIsChatVisible(false);
        setIsChatBoxOpen(true)
    }

    const openChatBox = () => {
        setIsChatVisible(true);
        setChatBoxIndex(getOpenedHouseCard())
    }

    const handleCheckboxChange = () => {
        setChecked(!isChecked);
        if (!isChecked) {
            setMapImg("/map_optimized.png");
        } else {
            setMapImg("/map.png");
        }
    };



    useEffect(() => {
        let newItemsLocal = localStorage.getItem('newItems');
        if (newItemsLocal) {
            setTakenItems(JSON.parse(newItemsLocal));
        }

    },[isCardVisible, setTakenItems])

    useEffect(() => {
        console.log(takenItems);
    },[takenItems])
    return (
        <div className="flex flex-col gap-4">
            <div className="w-80 h-5">
                <span className="text-zinc-800 text-base font-semibold leading-snug">Live Tracking </span>
                <span className="text-zinc-800 text-base font-normal leading-snug">(id:</span>
                <span className="text-zinc-800 text-base font-normal leading-snug">
                    #321938109)
                </span>
            </div>

            <div className="map w-full h-[716px] bg-gray-200 rounded-xl bg-cover"
                 style={{ backgroundImage: `url('${mapImg}')`, backgroundSize: 'auto', backgroundRepeat: 'no-repeat'} }>
                <CarPing position={{x: 75, y: 438}}/>
                <HousePing onClick={toggleVisible(0)} position={{x: 60, y: 30}}/>
                <HousePing onClick={toggleVisible(1)} position={{x: 400, y: 32}}/>
                <HousePing onClick={toggleVisible(2)} position={{x: 500, y: 260}}/>
                <HousePing onClick={toggleVisible(3)} position={{x: 700, y: -90}}/>
                <HouseCard pinged={false} houseImg={"/house_sample_0.png"} position={{x: -66, y: -350}} item={takenItems[0] || null} isVisible={isCardVisible[0]} openChatBox={openChatBox}/>
                <HouseCard pinged={true} houseImg={"/house_sample_1.png"} position={{x: 273, y: -302}} item={takenItems[1] || null} isVisible={isCardVisible[1]} openChatBox={openChatBox}/>
                <HouseCard pinged={false} houseImg={"/house_sample_2.png"} position={{x: 373, y: -22}}  item={takenItems[2] || null} isVisible={isCardVisible[2]} openChatBox={openChatBox}/>
                <HouseCard pinged={false} houseImg={"/house_sample_3.png"} position={{x: 573, y: -323}} item={takenItems[3] || null} isVisible={isCardVisible[3]} openChatBox={openChatBox}/>
                <div className={"text-xs font-normal absolute top-[568px] left-[840px] chat p-[1px] rounded-full w-6 h-6 flex items-center justify-center " +
                    "bg-red-500 text-white border-[2px] border-red-100"}>
                    2
                </div>
                <DelivererCard />
            </div>
            <label className="flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-500 checked:text-indigo-600 accent-indigo-500"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <span className="flex flex-row items-center gap-2 w-full ml-2 text-md font-medium">Show optimized path <div className={"text-red-500 mb-[9px]"}>▃ ▃ ▃</div></span>
            </label>
            <div className="absolute top-[681px] left-[1420px]">
                {isChatVisible && <ChatBox messages={chatBox[chatBoxIndex].messages}
                                           sender={chatBox[chatBoxIndex].sender}
                                           handleChatboxToggle={handleChatboxToggle}
                                           isChatboxOpen={isChatBoxOpen}/>
                }
            </div>
            {(isChatVisible && !isChatBoxOpen) && <button
                onClick={closeChatBox}
                className="top-[1138px] left-[1433px] p-1 absolute rounded-full bg-gray-200 hover:bg-gray-400 focus:outline-none"
            >
                <XMarkIcon className="h-3 w-3 text-gray-600" />
            </button>}
        </div>
    );
}

export default TrackingContent;