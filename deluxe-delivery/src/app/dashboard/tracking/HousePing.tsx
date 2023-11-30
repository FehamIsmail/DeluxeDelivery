"use client"
import React, {useEffect} from 'react';
import {Position} from "@/constants/types";

interface HousePingProps {
    position: Position;
    onClick: () => void;
}
function HousePing(props: HousePingProps) {
    const {position} = props;
    // Create div ref
    const divRef = React.useRef<HTMLDivElement>(null);
    // Create state for position
    const [pos, setPos] = React.useState<Position>(position);

    useEffect(() => {
        // Set the position of the div to the position prop
        if(divRef.current){
            divRef.current.style.top = `${pos.y}px`;
            divRef.current.style.left = `${pos.x}px`;
        }
    },[divRef])

    return (
        <div onClick={props.onClick} ref={divRef} style={{backgroundImage: "url('/house.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}
             className={`h-[48px] w-[48px] relative cursor-pointer`}
        ></div>
    );
}

export default HousePing;