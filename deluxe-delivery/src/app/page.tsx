import Header from "@/components/Header/Header";
import {UserType} from "@/constants/types";

export default function Home() {
  return (
    <main className="bg-white min-h-screen items-center">
      <Header type={UserType.CUSTOMER} page={'MAIN_MENU'}/>
    </main>
  )
}
