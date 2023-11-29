import React from 'react';
import {Item} from "@/constants/types";

interface HouseCardProps {
    item: Item | null,
    houseImg: string,

}

function HouseCard(props: HouseCardProps) {

    let itemObj = props.item;
    if(!itemObj) {
        itemObj =
            {
                name: "Vase",
                description: "dksajdklsadjaksl",
                price: 0,
                quantity: 1
            }
    }

    const {item} = props;

    return (
        <div className={"h-[155px] w-[300px] flex flex-row gap-[7px] rounded-xl shadow-lg bg-white"}>
            <img className={"w-[131px] h-full"} src={"house_sample.png"} alt={"house"}/>
            <div className={"flex flex-col gap-1"}>
                <span className={"text-sm font-semibold text-zinc-800"}>{itemObj.name}</span>
                <span className={"text-sm font-semibold text-zinc-800"}>House</span>
                <span className={"text-sm font-normal text-zinc-800"}>Delivery Date: 10/10/2021</span>
            </div>
        </div>
    );
}

export default HouseCard;