import Header from "@/components/Header/Header";
import Landing from "@/components/Landing/Landing";

export default function Home() {
  return (
    <main className="bg-white min-h-screen items-center">
      <Header page={'MAIN_MENU'}/>
      <Landing />
    </main>
  )
}
