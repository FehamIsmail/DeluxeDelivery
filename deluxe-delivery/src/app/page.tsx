import Header from "@/components/Header/Header";
import {UserType} from "@/constants/types";

export default function Home() {
  return (
    <main className="flex bg-white min-h-screen flex-col items-center justify-between">
      <Header type={UserType.CUSTOMER} />
    </main>
  )
}
