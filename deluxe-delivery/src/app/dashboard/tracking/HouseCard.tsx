"use client"
import React, {useEffect} from 'react';
import {Position} from "@/constants/types";
import {MapPinIcon} from "@heroicons/react/24/outline";

interface HouseCardProps {
    item: any,
    houseImg: string,
    position: Position,
    isVisible: boolean,
    openChatBox: () => void,
    pinged: boolean
}

function HouseCard(props: HouseCardProps) {
    let itemObj = props.item;
    if(!itemObj) {
        itemObj =
            {
                name: "Vase",
                description: "dksajdklsadjaksl",
                address: "1225 Locust Court",
                price: 0,
                quantity: 1
            }
    }

    const {position, isVisible, pinged} = props;
    // Create div ref
    const divRef = React.useRef<HTMLDivElement>(null);
    // Create state for position
    const [pos, setPos] = React.useState<Position>(position);
    const [visible, setVisible] = React.useState<boolean>(isVisible);

    const messageClass = pinged ? "self-end mr-4 mt-auto" : "self-end mr-4 mt-auto"

    useEffect(() => {
        // Set the position of the div to the position prop
        if(divRef.current){
            divRef.current.style.top = `${pos.y}px`;
            divRef.current.style.left = `${pos.x}px`;
        }
    },[divRef])

    useEffect(() => {
        setVisible(isVisible);
    }, [isVisible]);

    return (
        <div
            className={` relative h-[170px] w-[300px] flex flex-row gap-[7px] p-[7px] rounded-xl shadow-lg bg-white arrow-container ${
                visible ? 'fade-in-up' : 'hidden'
            }`}
            ref={divRef}
        >
            <img className={"w-[100px] h-full object-fill rounded-lg"} src={props.houseImg} alt={"house"}/>
            <div className={"flex flex-col gap-1"}>
                <span className={"text-sm font-semibold text-zinc-800"}>{itemObj.name} <span className={" font-normal"}>({itemObj.quantity})</span></span>
                {itemObj.isExpressDelivery && <span className={"text-white text-sm w-fit font-normal bg-[#49BEB7] px-2 rounded-md"}>Express Delivery</span>}
                <span className={"text-white text-sm w-fit font-normal bg-[#8ac0ff] px-2 rounded-md"}>Leave at door</span>
                {itemObj.fragile &&<span className={"text-[#f34c41] text-sm w-fit font-normal bg-[#ffecec] px-2 rounded-md"}>Fragile</span>}
                <div className={"address mt-1 flex flex-row items-center gap-1"}><MapPinIcon className={"h-[13px]"}/><div className="w-44 pt-0.5 text-neutral-400 text-xs font-normal font-['Noto Sans'] leading-3">{itemObj.address}</div></div>

                <div className={`messages ${messageClass}  w-fit flex flex-row items-center gap-1 px-[15px] py-[5px] bg-[#f6f6f8] text-[#1b59f8] rounded-md cursor-pointer`}
                    onClick={props.openChatBox}
                >
                    <img className={"h-[21px] object-cover"} src={'/message_icon.png'} alt={'message'}></img>
                    <span className={"text-xs"}>{props.pinged ? '2 new messages' : 'view messages'}</span>
                </div>
            </div>
            <div className="arrow"></div>
        </div>
    );
}

export default HouseCard;