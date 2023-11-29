import React from 'react';
import CarPing from "@/app/dashboard/tracking/CarPing";
import HousePing from "@/app/dashboard/tracking/HousePing";
import HouseCard from "@/app/dashboard/tracking/HouseCard";

function TrackingContent() {
    return (
        <div className="flex flex-col gap-4">
            <div className="w-80 h-5">
                <span className="text-zinc-800 text-base font-semibold leading-snug">
                    Live Tracking
                </span>
                <span className="text-zinc-800 text-base font-normal leading-snug">
                    (id:
                </span>
                <span className="text-zinc-800 text-base font-normal leading-snug">
                    #321938109)
                </span>
            </div>
            <div className="map w-full h-[716px] bg-gray-200 rounded-xl bg-cover"
                 style={{ backgroundImage: "url('/map.png')", backgroundSize: 'auto', backgroundRepeat: 'no-repeat'} }>
                <CarPing position={{x: 75, y: 438}}/>
                <HousePing position={{x: 60, y: 30}}/>
                <HousePing position={{x: 400, y: 32}}/>
                <HousePing position={{x: 500, y: 260}}/>
                <HousePing position={{x: 700, y: -90}}/>
                <HouseCard houseImg={""} item={null}/>
            </div>
        </div>
    );
}

export default TrackingContent;