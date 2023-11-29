import { ReactNode } from 'react';
import Header from "@/components/Header/Header";
import SideBar from "@/app/dashboard/SideBar";
import Footer from "@/components/Footer/Footer";
import ContentLayout from "@/app/dashboard/ContentLayout";

interface DashboardLayoutProps {
    children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {



    return (
        <>
            <Header page={'OTHER'}/>
            <div className="bg-white flex flex-row px-[89px] pt-[30px] gap-10 pb-10">
                <SideBar />
                <ContentLayout children={children} />
            </div>
            <Footer/>
        </>
    )
}

export default DashboardLayout;