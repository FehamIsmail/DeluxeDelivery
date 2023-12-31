"use client"
import React, {useEffect, useState} from 'react';

function NewTable() {
    interface item{
        id: number;
        name: string;
        quantity: number;
        address: string;
        fragile: boolean;
        orderDate: Date;
        isChecked: boolean,
        isExpressDelivery: boolean;
    }

    const [showConfirmation, setShowConfirmation] = useState<boolean>(false);

    const [newItems , setNewItems] = useState<item[]>([
        {
            id: 1,
            name: "Vase",
            quantity: 1,
            fragile: true,
            orderDate: new Date(),
            isChecked: false,
            address: "1225 Locust Court",
            isExpressDelivery: true,
        },
        {
            id: 2,
            name: "Bookshelf",
            quantity: 2,
            fragile: false,
            orderDate: new Date("2023-12-01"),
            isChecked: false,
            address: "2367 Metz Lane",
            isExpressDelivery: false,
        },
        {
            id: 3,
            name: "Coffee Table",
            quantity: 1,
            fragile: false,
            orderDate: new Date("2023-11-25"),
            isChecked: false,
            address: "770 River Road",
            isExpressDelivery: false,
        },
        {
            id: 4,
            name: "Lamp",
            quantity: 3,
            fragile: true,
            orderDate: new Date("2023-12-05"),
            isChecked: false,
            address: "214 Larry Street",
            isExpressDelivery: true,
        },
    ]);

    const takeOrder = () => {
        // Get all checked items and put in localStorage
        let checkedItems = newItems.filter((item) => item.isChecked);
        // Make all items unchecked before putting in localStorage
        checkedItems = checkedItems.map((item) => {
            item.isChecked = false;
            return item;
        })
        localStorage.setItem('newItems', JSON.stringify(checkedItems));
        // filter out checked items from newItems using checkedItems
        setNewItems(newItems.filter((item) => item == null || !checkedItems.includes(item)));
        setShowConfirmation(true)
    }

    const handleCheckboxChange = (index: number) => {
        setNewItems(newItems.map((item) => {
            if(item.id === index){
                item.isChecked = !item.isChecked;
            }
            return item;
        }))
    };

    useEffect(() => {
      // filter newitems with new items already present in the localStorage
        let newItemsLocal = localStorage.getItem('newItems');
        if (newItemsLocal) {
            let parsedNewItems = JSON.parse(newItemsLocal);
            console.log(parsedNewItems)
            // filter out items present in parsedNewItems from newItems using id
            setNewItems(newItems.filter((item) => item == null || !parsedNewItems.includes(item)));

        }

    }, [setNewItems])


    return (
        <>
            <div className="flex flex-col p-[30px] w-full h-full shadow-md border-[1px] rounded-xl">
                <div className="w-full h-5 text-zinc-800 text-base font-semibold pb-[30px] border-b-[1px] ">New Items</div>
                <table className="mt-2 h-[540px]">
                    <thead>
                         <tr className={"w-full flex flex-row gap-1 place-content-between pb-1"}>
                             <th className={"ml-6 check"}>
                                 <input type="checkbox" className="form-checkbox h-4 w-4 text-slate-600"  readOnly={true} checked={false}/>
                             </th>
                             <th className={""}>Item name</th>
                             <th className={""}>Quantity</th>
                             <th className={""}>Fragile?</th>
                             <th className={"w-[180px]"}>Delivery Type</th>
                             <th className={"w-[200px]"}>Address</th>
                             <th className={""}>Order Date</th>
                         </tr>
                    </thead>
                    <tbody className={""}>
                    {newItems.map((item) => (
                        <tr key={item.id} className={"mt-2 w-full flex flex-row gap-1 text-sm place-content-between"}>
                            <td className={"ml-6 check"}>
                                <input type="checkbox" className="form-checkbox h-4 w-4 text-slate-600"
                                       checked={item.isChecked} onChange={() => handleCheckboxChange(item.id)}/>
                            </td>
                            <td className={""}>{item.name}</td>
                            <td className={""}>{item.quantity}</td>
                            <td className={""}>{item.fragile ? 'true' : 'false'}</td>
                            <td className={"w-[180px]"}>{item.isExpressDelivery? 'express' : 'standard'}</td>
                            <td className={"w-[200px]"}>{item.address}</td>
                            <td className={""}>{item.orderDate.toISOString().slice(0,10)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <button onClick={takeOrder} className="ml-[1258px] mt-16 w-32 h-14 bg-amber-500 rounded-2xl hover:bg-amber-600 justify-center items-center gap-2.5 inline-flex">
                <div className="text-center text-white text-base font-semibold font-['Axiforma']">Take Order</div>
            </button>
            {showConfirmation && <img onClick={() => {setShowConfirmation(false)}} className="absolute cursor-pointer top-[910px] left-[410px] object-cover h-auto w-[400px]" src="/order_picked.PNG" alt="map"/>}
        </>
    );
}

export default NewTable;