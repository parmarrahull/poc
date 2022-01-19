import React, { useState } from 'react';
import { FaSearchLocation, FaAngleDown } from "react-icons/fa";

const Locations = () => {

    const [active, setActive] = useState(false);
    const [selected, setSelected] = useState("");

    const arrs = [
        {
            title: "industry",
            options: "1",
        },
        {
            title: "Business Type ",
            options: "1",
        },
        {
            title: "Company Type",
            options: "1",
        },
        {
            title: "Filter By High to Low",
            options: "1",
        },
        {
            title: "Sort By",
            options: "1",
        },
        {
            title: "Number Of Employees",
            options: "1",
        },
    ]
    return (
        <>
            <div className='py-5'>
                <div className='border-2 mx-5 w-full'>
                    <div className='flex justify-center '>
                        <div className='mx-5 py-5'>
                            <div className='text-xl'>
                                <p> Filters </p>
                            </div>
                            <div className='py-5 font-bold text-xl'>
                                <h1> Locations </h1>
                            </div>
                            <div className='flex items-center border-2'>
                                <p className='text-2xl'><FaSearchLocation /> </p>
                                <input className='w-full text-xl' type="text" placeholder="Location.." />
                            </div>
                        </div>
                    </div>
                    <div>
                        {arrs.map((data) => {
                            return (
                                <>
                                    <div className='mx-5 text-xl'>
                                        <div className='flex w-full my-4 '>
                                            {data.title}
                                            <span className='flex items-center justify-row'
                                                onClick={(e) =>
                                                    setActive(!active)}> <FaAngleDown /> </span>
                                        </div>
                                        {active && (
                                            <div>
                                                <div
                                                    onClick={(e) => {
                                                        setSelected(arrs);
                                                        setActive(false);
                                                    }}
                                                >
                                                    {data.options}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </>
                            )
                        })}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Locations;
