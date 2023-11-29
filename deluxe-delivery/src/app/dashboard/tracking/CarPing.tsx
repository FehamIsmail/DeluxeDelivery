"use client"
import React, {useEffect} from 'react';
import {Position} from "@/constants/types";

interface CarPingProps {
    position: Position
}
function CarPing(props: CarPingProps) {

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
    }, [divRef])

    return (
        <div ref={divRef} style={{backgroundImage: "url('/driver_location.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}
             className={`h-[178px] w-[178px] relative animate-pulse-opacity`}
        ></div>
    );
}

export default CarPing;