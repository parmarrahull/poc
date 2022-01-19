import React from 'react'
import Banner from '../Banner';
import Locations from '../Filter components/Locations';


const Reliance = () => {

    const arr = [
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ56NX4addq8DWpQloKoubBysQCB-jB3d6pk0keujF7hEK8ODgbeA_VSPoEQxXzTaNaKQ&usqp=CAU",
            title: "Ad Reliance Industries Ltd.",
            agency: "Digital Marketing Agency IN",
            address: "504, NBC Complex, Plot #43, Sector 11, Opp IDBI Bank, CBR Belapur, Navi Mumbai-400624",
            year: "Founding Year : 2017",
            number: "+91 9594315559",
            open: "Open 8pm Close 8pm",
            order: "Min Order: $ 10000-2200 Team : Response Rate : 20%"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhwzFYuOXlamKPAKcEkVFQawiYaMCwA3ELp8ZB4lEfF7JxsI0uLh9Q7bSQ8qZExvhU41I&usqp=CAU",
            title: "Ad Tata Consultancy Services Ltd.",
            agency: "Digital Marketing Agency IN",
            address: "504, NBC Complex, Plot #43, Sector 11, Opp IDBI Bank, CBR Belapur, Navi Mumbai-400624",
            year: "Founding Year : 2017",
            number: "+91 9594315559",
            open: "Open 8pm Close 8pm",
            order: "Min Order: $ 10000-2200 Team : Response Rate : 20%"
        }
    ]

    return (
        <>
            <div className='flex'>
                <div className='w-3/12 h-full'>

                    <Locations/>
                </div>
                <div>
                    {arr.map((data) => {
                        return (
                            <>
                                <Banner data={data} />
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}


export default Reliance;
