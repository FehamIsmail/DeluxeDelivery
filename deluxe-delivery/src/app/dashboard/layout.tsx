import { ReactNode } from 'react';
import Header from "@/components/Header/Header";
import SideBar from "@/app/dashboard/SideBar";
import Footer from "@/components/Footer/Footer";

interface DashboardLayoutProps {
    children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    return (
        <>
            <Header page={'OTHER'}/>
            <div className="bg-white flex flex-row px-[89px] pt-[60px]">
                <SideBar />
                {children}
            </div>
            <Footer/>
        </>
    )
}

export default DashboardLayout;