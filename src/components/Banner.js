import React from 'react'
import { FaSistrix, FaPhone, FaClock, FaRegAddressCard } from "react-icons/fa";
import List from './Company components/List';
import Reviews from './Reviews/Reviews';

const Banner = ({ data }) => {
    return (
        <>
            <div className='flex my-5 '>
                <div className='flex flex-col justify-between mx-10 border-2 '>
                    <div className='flex flex-row'>
                        <div className='my-5 mx-5  rounded'>
                            <img className=' border-2'
                                alt='img'
                                src={data.img}
                            />
                        </div>
                        <div className='w-full'>
                            <div className='pb-1 font-bold'>
                                {data.title}
                            </div>
                            <div className='text-slate-400 text-sm'>
                                {data.agency}
                            </div>
                            <div>
                                <List />
                            </div>
                            <div className='flex justify-center items-center text-sm '>
                                <FaRegAddressCard /> &nbsp;  {data.address}
                            </div>
                            {/* w-full gap-20 flex */}
                            <div className=' w-full flex-row gap-20 flex py-5'>
                                <div className='flex items-center'>
                                    <FaSistrix /> &nbsp; {data.year}
                                </div>
                                <div className='flex items-center'>
                                    <FaPhone /> &nbsp; {data.number}
                                </div>
                                <div className='flex items-center'>
                                    <FaClock /> &nbsp; {data.open}
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='align-bottom mt-5 border-t-2'>
                        {data.order}
                    </div>
                </div>
                <div className=''>
                    {/* <Reviews /> */}
                </div>
            </div>

        </>
    )
}

export default Banner;
