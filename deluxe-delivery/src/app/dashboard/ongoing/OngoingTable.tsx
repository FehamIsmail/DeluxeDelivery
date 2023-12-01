"use client"
import React, {useEffect} from 'react';
import emailjs from '@emailjs/browser';

function OngoingTable() {
    enum status {
        "NEW",
        "ONGOING",
        "DELIVERED"
    }
    const [ongoingItems , setOngoingItems] = React.useState<any[]>([])

    const handleActionButton = (idx: number) => {
        // Set the item's checked to be true
        const newItems = [...ongoingItems];
        // search for the item with the id
        const index = newItems.findIndex((item) => item.id === idx);
        newItems[index].isChecked = !newItems[index].isChecked;
        setOngoingItems(newItems);
    }

    const saveChanges = () => {
        // item status goes from NEW to ONGOING to DELIVERED
        const updatedItems = [...ongoingItems];
        // set the status of the checked items to be ONGOING
        updatedItems.forEach((item) => {
            if(!item.isChecked) return
            if(item.status === status.NEW)
                item.status = status.ONGOING;
            else if(item.status === status.ONGOING){
                item.status = status.DELIVERED;
                sendEmailAfterDelivery(item.id);
            }

            item.isChecked = false;
            item.isChecked = false;
        })
        // update the ongoing items list with modified items
        setOngoingItems(updatedItems);
        // save the changes to localStorage
        localStorage.setItem('newItems', JSON.stringify(updatedItems));
    }

    const sendEmailAfterDelivery = (id: number) => {
        // send email to the customer after the delivery
        emailjs.send("service_x1tgpas","template_rp9fgtg", {
            to_name: "Ismail Feham",
            message: `Your order has been delivered successfully! We would love to hear your feedback.</br> ` +
                      `Please visit the feedback page below to leave your review.`,
            link: 'http://localhost:3000/feedback/' + id,
        },'sWssennv3itcfEw1l')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    useEffect(() => {
        // push taken items from localStorage on top of the ongoing items list
        let newItemsLocal = localStorage.getItem('newItems');
        if (newItemsLocal) {
            let newItems = JSON.parse(newItemsLocal);
            // set the status of the new items to be NEW
            newItems.forEach((item: any) => {
                item.status = status.NEW;
            })
            setOngoingItems(ongoingItems.concat(newItems));
        }


    },[setOngoingItems])

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
                    <th className={""}>Action</th>
                </tr>
                </thead>
                <tbody className={""}>
                {ongoingItems.map((item) => {  if(item.status != status.DELIVERED) return(
                    <tr key={item.id} className={"mt-2 w-full flex flex-row gap-1 text-sm place-content-between"}>
                        <td className={""}>{item.name}</td>
                        <td className={""}>{item.quantity}</td>
                        <td className={"w-[180px]"}>{item.isExpressDelivery ? 'express' : 'delivery'}</td>
                        <td className={"w-[200px]"}>{item.address}</td>
                        <td className={""}>{item.orderDate.slice(0,10)}</td>
                        <td className={"p-0 flex justify-center"}>
                            <button onClick={() => handleActionButton(item.id)}
                                    className={`w-32 h-5 bg-blue-600 ${item.isChecked ? 'bg-blue-400' : 'bg-blue-600'} rounded-xl`}>
                                <div className="text-white text-xs font-medium">{
                                    item.status === status.NEW ? 'Pick up' : 'Mark as Delivered'
                                }</div>
                            </button>
                        </td>
                    </tr>
                )})}
                </tbody>
            </table>
            <button onClick={saveChanges} className="ml-[1179px] px-2 mt-16 w-36 h-14 bg-amber-500 rounded-2xl hover:bg-amber-600 justify-center items-center gap-2.5 inline-flex">
                <div className="text-center text-white text-base font-semibold">Save Changes</div>
            </button>
        </div>
    );
}

export default OngoingTable;