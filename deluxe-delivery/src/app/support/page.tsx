import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Support from "@/components/Support/Support";

export default function support() {
    return (
        <main className="bg-white min-h-screen items-center">
            <Header page={'OTHER'} />

            <Support/>

            <Footer />
        </main>
    )
}




