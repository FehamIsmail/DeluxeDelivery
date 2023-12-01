"use client"
import React, {useEffect} from 'react';
import Logo from "@/components/Logo/Logo";
import ProfilePicture from "@/components/ProfilePicture/ProfilePicture";
import {signOut} from "@/components/Authentification/SignOut";

export interface HeaderProps {
    page: 'MAIN_MENU' | 'OTHER';
}
function Header(props: HeaderProps) {
    // destructure props
    const {page} = props;

    const heightClass = page === "OTHER" ? "h-28 justify-center" : "h-[800px] justify-start";

    return (
        <>
            <div className={`${heightClass}  flex flex-col bg-gradient-to-b from-primary-1 to-primary-2 " +
                " px-[8%] lg:px-20 xl:px-40 py-3`}>
                <NavBar page={page} />
                {page === "MAIN_MENU" && <Hero />}
            </div>
            <div className="h-3 bg-violet-200" />
        </>
    );
}


function NavBar(props:{page: 'MAIN_MENU' | 'OTHER'}) {
    const {page} = props;
    const paddingTop  = page === "OTHER" ? "" : "pt-4";
    const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);
    const [userType, setUserType] = React.useState<'customer'|'deliverer'>("customer");



    const [isSignoutOpen, setIsSignoutOpen] = React.useState(false);
    const [isSignoutHovered, setIsSignoutHovered] = React.useState(false);
    const signoutClass = isSignoutOpen ? "block" : "hidden";

    const handleMouseEnter = () => {
        setIsSignoutHovered(true);
    };

    const handleMouseLeave = () => {
        setIsSignoutHovered(false);
    };

    const handleClickProfilePicture = () => {
        setIsSignoutOpen(!isSignoutOpen)
    }

    const handleSignOut = () => {
        signOut();
    }

    useEffect(() => {
        setIsAuthenticated(localStorage.getItem('isAuthenticated') === 'true');
        setUserType(localStorage.getItem('userType') as 'customer'|'deliverer');
    })

    return(
        <div className={`flex flex-row justify-between ${paddingTop}`}>
            <div className="flex gap-4 flex-row content-center items-center">
                <a href="/"><Logo height={58} width={58} /></a>
                <div className="text-white text-xl font-extrabold ">Deluxe Delivery</div>
            </div>
            <div className="flex gap-4 flex-row items-center">
                <div className="flex flex-row gap-14 text-white text-lg font-medium  mr-12">
                    <div>About</div>
                    <div> <a href={'support'}>Support</a></div>
                </div>
                <>
                {!isAuthenticated &&
                    <a href={'signin'} className="w-36 h-16 px-9 py-3.5 bg-white rounded-2xl justify-start items-center gap-2.5 inline-flex">
                        <div className="text-primary-1 text-lg font-semibold mx-auto">Login</div>
                    </a>
                }
                {!isAuthenticated &&
                    <a href={'signup'} className="w-36 h-16 px-9 py-3.5 bg-amber-500 rounded-2xl justify-start items-center gap-2.5 inline-flex">
                        <div className="text-white text-lg font-semibold">Sign up</div>
                    </a>
                }
                {isAuthenticated && userType === 'customer' && userType &&
                    <a href={'newitem'} className="mr-4 w-[190px] h-16 px-9 py-3.5 bg-amber-500 rounded-2xl justify-start items-center gap-2.5 inline-flex">
                        <div className="text-white text-lg font-semibold">New Delivery</div>
                    </a>
                }
                {isAuthenticated && userType === 'deliverer' && userType &&
                    <a href={'dashboard/new'} className="mr-4 w-fit h-16 px-9 py-3.5 bg-amber-500 rounded-2xl justify-start items-center gap-2.5 inline-flex">
                        <div className="text-white text-lg font-semibold">Dashboard</div>
                    </a>
                }
                {isAuthenticated && userType === 'customer' && userType &&
                    <div onClick={handleClickProfilePicture} className={"cursor-pointer"}><ProfilePicture url={'/client.png'} size={67} /></div>
                }
                {isAuthenticated && userType === 'deliverer' && userType &&
                    <div onClick={handleClickProfilePicture} className={"cursor-pointer"}><ProfilePicture url={'/deliverer.png'} size={67} /></div>
                }
                </>
                <div className={`absolute top-[108px] left-[1662px] bg-white rounded-xl shadow-xl ${signoutClass} ${isSignoutOpen ? 'fade-in-down' : 'hidden'}`}>
                    <div
                        className={`cursor-pointer px-3 py-1.5 hover:bg-red-500 rounded-lg transition-all duration-300 hover:text-white`}
                        onClick={handleSignOut}
                    >
                        Sign out
                    </div>
                </div>
            </div>
        </div>
    )
}

function Hero() {
    return (
        <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-3 h-[600px] w-[520px] ">
                <div className="pt-32 text-white text-6xl leading-[4rem] font-extrabold  ">
                    Ranked #1 <br/>Best Delivery Management Software<br/>
                </div>
                <div>
                    <div className="w-96 opacity-80 text-white text-xl font-normal  leading-loose">
                        Track and optimize routes in real-time
                    <br/>
                    </div>
                </div>
                <div className="flex flex-row gap-8 items-center">
                    <button className="w-72 h-16 px-10 py-4 bg-amber-500 rounded-2xl justify-start items-center gap-2.5 inline-flex">
                        <div className="text-white text-xl font-semibold ">Get Started</div>
                    </button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-white">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
                    </svg>
                    <div className="w-72 h-fit text-white text-xl font-normal ">Watch how it works</div>

                </div>
            </div>
            <img src={'live_tracking_sample.png'} alt={'live tracking sample'} className="h-[400px]">
                </img>
        </div>
    );
}



export default Header;