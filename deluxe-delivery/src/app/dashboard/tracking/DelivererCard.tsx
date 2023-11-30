import React from 'react';
import ProfilePicture from "@/components/ProfilePicture/ProfilePicture";

function DelivererCard() {
    return (
        <div className={"absolute h-[86px] w-[400px] top-[920px] left-[440px] rounded-xl shadow-xl bg-white"}>
            <div className={"flex flex-row justify-between items-center px-[20px] py-[13px]"}>
                <ProfilePicture url={'/deliverer.png'} size={60} />
                <div className={"mid flex flex-col gap-1"}>
                    <div className={"top-mid flex flex-row gap-8"}>
                        <div>Pie Crust</div>
                        <div className={"ratings flex flex-col"}>
                            <div className={"stars flex flex-col gap-0.5"}>
                                <img className={"w-[70px] h-auto"} src={'/stars.png'} alt={'stars'}/>
                                <div className={"ml-1 flex flex-row gap-1.5"}>
                                <div className="w-6 h-3 px-1.5 bg-teal-400 rounded-sm items-center gap-1.5 inline-flex justify-center">
                                    <div className="text-center text-white text-xs font-normal  leading-3">9.0</div>
                                </div>
                                    <div className="text-teal-400 text-xs font-normal leading-3">Excellent</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-44 h-5 text-neutral-600 text-xs font-normal">2020 Mercedes-Benz S-Class</div>
                </div>
                <img className={"w-[90px] h-auto"} src={'/car_model.png'} alt={'phone'}/>
            </div>
        </div>
    );
}

export default DelivererCard;