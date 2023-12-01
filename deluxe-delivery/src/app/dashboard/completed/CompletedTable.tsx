"use client"
import React, {useEffect} from 'react';
import {status} from "@/constants/types";

function CompletedTable() {

    const [completedItems , setCompletedItems] = React.useState<any[]>([])

    useEffect(() => {
        let newItemsLocal = localStorage.getItem('newItems');
        if (newItemsLocal) {
            let newItems = JSON.parse(newItemsLocal);
            setCompletedItems(completedItems.concat(newItems));
        }
    },[setCompletedItems])

    return (
        <div className="flex flex-col p-[30px] w-full h-full shadow-md border-[1px] rounded-xl">
            <div className="w-full h-5 text-zinc-800 text-base font-semibold pb-[30px] border-b-[1px] ">Ongoing Items</div>
            <table className="mt-2 h-[540px]">
                <thead>
                <tr className={"w-full flex flex-row gap-1 place-content-between pb-1"}>
                    <th className={""}>Item name</th>
                    <th className={""}>Quantity</th>
                    <th className={"w-[180px]"}>Delivery Type</th>
                    <th className={"w-[200px]"}>Address</th>
                    <th className={""}>Order Date</th>
                    <th className={""}>Feedback</th>
                </tr>
                </thead>
                <tbody className={""}>
                {completedItems.map((item) => {  if(item.status == status.DELIVERED) return(
                    <tr key={item.id} className={"mt-2 w-full flex flex-row gap-1 text-sm place-content-between"}>
                        <td className={""}>{item.name}</td>
                        <td className={""}>{item.quantity}</td>
                        <td className={"w-[180px]"}>{item.isExpressDelivery ? 'express' : 'delivery'}</td>
                        <td className={"w-[200px]"}>{item.address}</td>
                        <td className={""}>{item.orderDate.slice(0,10)}</td>
                        <td className={"p-0 flex justify-center"}>
                            9/10
                        </td>
                    </tr>
                )})}
                </tbody>
            </table>
        </div>
    );
}

export default CompletedTable;