import Header from "@/components/Header/Header";

export default function newItem() {
    return (
        <main className="bg-white min-h-screen items-center">
            <Header page={'MAIN_MENU'} />
                <div className="w-[926px] h-[800px] bg-white rounded-[13px] shadow">
                    <form className="flex flex-col items-center"><label className="text-2xl font-bold">New Item</label>
                    <div className="w-[855px] h-[239px] bg-white rounded-[10px] border border-zinc-400" >
                        <input className="border-2 border-gray-400 rounded-lg w-1/2 p-2 m-2" type="text" placeholder="Item Name:" />
                        <input className="border-2 border-gray-400 rounded-lg w-1/2 p-2 m-2" type="text" placeholder="Item Description:" />
                        <input className="border-2 border-gray-400 rounded-lg w-1/2 p-2 m-2" type="text" placeholder="Item Quantity:" />
                    </div>

                    <div className="w-[855px] h-[239px] bg-white rounded-[10px] border border-zinc-400" >
                        <input className="border-2 border-gray-400 rounded-lg w-1/2 p-2 m-2" type="text" placeholder="Name:" />
                        <input className="border-2 border-gray-400 rounded-lg w-1/2 p-2 m-2" type="text" placeholder="Email Address:" />
                        <input className="border-2 border-gray-400 rounded-lg w-1/2 p-2 m-2" type="text" placeholder="Phone Number:" />
                    </div>

                    <div className="w-[855px] h-[239px] bg-white rounded-[10px] border border-zinc-400" >
                        <input className="border-2 border-gray-400 rounded-lg w-1/2 p-2 m-2" type="text" placeholder="Length:" />
                        <input className="border-2 border-gray-400 rounded-lg w-1/2 p-2 m-2" type="text" placeholder="Width:" />
                        <input className="border-2 border-gray-400 rounded-lg w-1/2 p-2 m-2" type="text" placeholder="Height:" />
                        <input className="border-2 border-gray-400 rounded-lg w-1/2 p-2 m-2" type="text" placeholder="Weight:" />
                    </div>

                        <div className="w-[135px] h-14 px-[35px] py-3.5 bg-amber-500 rounded-[15px] justify-center items-center gap-2.5 inline-flex">
                            <button className="text-center text-white text-[17px] font-semibold font-['Axiforma']">Calculate</button>
                        </div>

                    </form>
                </div>


        </main>
    )
}

