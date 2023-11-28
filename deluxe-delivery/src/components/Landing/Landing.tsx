"use client"
import React, { useState } from 'react';

function Landing() {
    return (
        <div className={"flex flex-col items-center"}>
            <img className={"py-20 px-[10%]"} alt={'Sponsors'} src={'sponsors.png'}></img>
            <Subtitle text={'Solutions for every delivery'} />
            <div className="flex mt-14 pt-[45px] pb-32 flex-row gap-10">
                <SolutionCard title={'Courier'} description={'Speedy, secure parcel deliveries tailored to your schedule, wherever you are.'}/>
                <SolutionCard title={'Logistics'} description={' Seamless supply chain solutions for businesses, ensuring timely and efficient operations.'}/>
                <SolutionCard title={'Food'} description={'Savor convenience with swift, delectable deliveries from local eateries to your door.'}/>
                <SolutionCard title={'Grocery'} description={'Streamline your day – fresh produce and pantry essentials delivered hassle-free.'}/>
            </div>
            <div className="flex flex-col items-center py-40 bg-[#F1F6FF] h-[1200px] w-full gap-12" >
                <Subtitle text={'Delivery Business Interfaces'}/>
                <img className={"w-[64%]"} src={'dashboard_sample.png'} alt={'Dashboard Sample'}></img>
            </div>
            <div className="flex flex-col items-center py-40 bg-primary-1 h-[700px] w-full gap-12" >
                <Subtitle text={'All in one proof for final mile delivery solutions'} color={"white"}/>
                <img className={"w-[64%]"} src={'features.png'} alt={'features'}></img>
            </div>
            <Accordion/>
            <FleetBanner/>
            <LandingFooter/>
        </div>
    );
}

function Subtitle(props: { text: string; color?: string }) {
    const { text, color } = props;

    const barColorClass = color ? `bg-${color}` : 'bg-indigo-600';

    return (
        <div className="h-fit w-fit flex flex-col items-center gap-2">
            <div className={`text-center text-slate-600 text-4xl font-extrabold font-['Axiforma'] leading-10 ${color ? `text-${color}` : ''}`}>
                {text}
            </div>
            <div className={`w-20 h-1 ${barColorClass} rounded-tl-sm rounded-br-sm`} />
        </div>
    );
}


function SolutionCard(props: {title: string, description: string}) {
    return (
        <div className="w-72 h-80 bg-white border border-slate-200 border-opacity-70 flex flex-col items-center py-[50px] gap-[20px]">
            <img className="w-[83px] h-[59px]" src={props.title.toLowerCase()+".png"} alt={props.title} />
            <div className="text-center text-slate-600 text-2xl font-semibold font-['Axiforma'] leading-10">{props.title}</div>
            <div className="w-60 opacity-80 text-center text-slate-600 text-base font-normal font-['Axiforma'] leading-loose">{props.description}</div>
        </div>
    );
}

interface AccordionItem {
    title: string;
    description: string;
    isOpen: boolean;
}
// Component for an expandable accordion
function Accordion() {

    const items = useState<AccordionItem[]> ([
        {title: "What is Delivery Deluxe?",
            description: "Delivery Deluxe is a delivery management system that helps businesses manage their delivery operations. We provide a suite of tools that help businesses manage their delivery operations, including a dashboard for businesses to manage their deliveries, a mobile app for drivers to manage their deliveries, and a mobile app for customers to track their deliveries.",
            isOpen: false},
        {title: "What is the pricing model?",
            description: "Pricing is based on the item details and the distance of the delivery. We charge a flat rate of $5 for the first 5 miles, and $1 for every mile after that. We also charge a flat rate of $1 for every 10 pounds of the item. For example, a 10 pound item that is 10 miles away would cost $6.50. A 20 pound item that is 10 miles away would cost $7.50.",
            isOpen: false},
        {title: "How do I get started?",
            description: "To get started, simply sign up for an account on our website. Once you have an account, you can start creating deliveries. You can also download our mobile app to manage your deliveries on the go.",
            isOpen: false},
        {title: "What is the refund policy?",
            description: "We offer a 100% money back guarantee. If you are not satisfied with our service, you can request a refund within 30 days of your purchase.",
            isOpen: false},
        {title: "How do I contact support?",
            description: "We offer a dedicated support team that is available 24/7. You can contact us via live chat or email.",
            isOpen: false}])

    // function to toggle the open state of an item. Toggles the item with the given title and toggles the previous opened item, if any
    const toggleItemOpen= (title: string) => {
        const newItems = items[0].map((item) => {
            if (item.title === title) {
                item.isOpen = !item.isOpen;
            } else {
                item.isOpen = false;
            }
            return item;
        });
        items[1](newItems);
    }

    return (
        <div className="bg-[#F1F6FF] w-full flex flex-col items-center py-20">
            <div className="mb-10 flex justify-center">
            <Subtitle text={'Frequently Asked Questions'}/>
            </div>
            <div className="min-h-[200px] w-[1250px] flex flex-col items-center border border-slate-200 border-opacity-70">
                <div className="w-full flex flex-col items-center divide-[#F1F6FF] divide-y-[2px] rounded-2xl">
                    {items[0].map((item) => (
                        <AccordionItem item={item} toggleItemOpen={toggleItemOpen}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

function AccordionItem(props: {item: AccordionItem, toggleItemOpen: (title: string) => void}) {
    const {item, toggleItemOpen} = props;
    return (
        <div className="w-full h-fit bg-white flex flex-col items-center py-[50px] gap-[20px] p-[43px]">
            <div className="flex flex-row items-center justify-between w-full">
                <div className="text-center text-slate-600 text-2xl font-semibold font-['Axiforma'] leading-10">{item.title}</div>
                <button onClick={() => toggleItemOpen(item.title)}>
                    <img className="w-[24px] h-[24px]" src={item.isOpen ? 'minus.png' : 'plus.png'} alt={item.title} />
                </button>
            </div>
            <div className={`w-full opacity-80 text-slate-600 text-base font-normal font-['Axiforma'] leading-loose ${item.isOpen ? '' : 'hidden'}`}>{item.description}</div>
        </div>
    );
}

function FleetBanner() {
    return (
        <div className="h-[580px] bg-primary-1 w-full p-40 bg-cover bg-center"  style={{ backgroundImage: "url('/fleet_tracking_banner.png')"}} >
            <div className="text-white text-5xl leading-[4rem] font-extrabold font-['Axiforma'] ">
                Advanced Fleet Tracking <br/>Solution Tracking
            </div>

            <div className="mt-10 flex flex-row gap-8 items-center">
                <button className="w-52 h-16 px-10 py-4 bg-amber-500 rounded-2xl justify-start items-center gap-2.5 inline-flex">
                    <div className="text-white text-xl font-semibold font-['Axiforma']">Get Started</div>
                </button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
                </svg>
                <div className="ml-[-20px] w-72 h-fit pt-1 text-white text-xl font-normal font-['Axiforma']">Watch how it works</div>

            </div>
        </div>
    );
}

function LandingFooter() {
    return (
        <div className="h-[400px] bg-white p-32" >
            <div className="flex flex-row gap-[140px]">
                <div className="flex gap-4 flex-row content-center items-start mt-4">
                    <div className="w-[58px] h-[58px] bg-gradient-to-br from-fuchsia-500 to-indigo-500 rounded-full flex items-center justify-center pr-[3px]">
                        <img src="/logo_arrow.svg" alt="Deluxe Delivery Logo" className="" />
                    </div>
                    <div className="pt-4 text-slate-600 text-xl font-extrabold font-['Axiforma']">Delivery Deluxe</div>
                </div>
                <LandingFooterItem title={'Product'} item1={'Features'} item2={'API'} item3={'Solutions'}/>
                <LandingFooterItem title={'Company'} item1={'About Us'} item2={'Contact Us'} item3={'Career'}/>
                <LandingFooterItem title={'Support'} item1={'Support Center'} item2={'Live Chat'} item3={'System Status'}/>
                <div className="flex flex-col gap-4">
                    <div className="text-slate-600 text-xl font-semibold font-['Axiforma'] capitalize leading-[56px]">Follow Us</div>
                    <img className="h-10 mt-[-20px] object-cover" src={'socials.png'} alt={'Socials'}></img>
                </div>


            </div>
        </div>
    )
}

function LandingFooterItem(props: {title:string, item1: string, item2: string, item3: string }){
    return (
        <div className="flex flex-col gap-4">
            <div className="text-slate-600 text-xl font-semibold font-['Axiforma'] capitalize leading-[56px]">{props.title}</div>
            <div className="opacity-80 text-slate-600 text-base font-normal font-['Axiforma'] leading-[42.08px]">
                {props.item1}
                <br/>{props.item2}
                <br/>{props.item3}</div>
        </div>
    )
}



export default Landing;