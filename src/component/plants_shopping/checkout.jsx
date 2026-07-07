import { useSelector, useDispatch } from 'react-redux';
import KHQR from '../../assets/plant/khqr.jpg'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Checkout () {
    const carts = useSelector((state) => state.plant.carts)
    const totalCartAmont = useSelector((state) => state.plant.totalCartPrice)

    return (
        <>
             <div className='grid grid-cols-2 gap-2 mt-10 place-content-center '>
                <div className='flex flex-col items-center justify-center text-center gap-2'>
                    <img src={KHQR} alt="KHQR" className='border border-slate-700 mask-radial-farthest-corner mask-radial-from-100% mask-radial-at-[30%_30%] ' style={{ width: '50%', height: '400px', objectFit: 'cover', borderRadius: '4px' }} />
                    <p className='text-sm'>Scan to pay with QR Code</p>                 
                </div>
                <div>
                    <p className="text-md"><span className='font-bold'>TOTAL COST FOR THE EVENT</span></p>
                    <div className='flex justify-center pt-5'>
                        <table className="text-sm border-collapse border border-gray-400 ">
                            <thead>
                                <tr>
                                    <th className='border border-gray-300 px-4 py-1'>Name</th>
                                    <th className='border border-gray-300 px-4'>Unit cost</th>
                                    <th className='border border-gray-300 px-4'>Quantity</th>
                                    <th className='border border-gray-300 px-4'>Total cost</th>
                                </tr>
                            </thead>
                            <tbody>
                                {carts.map((cart) => (
                                    <tr key={cart.id || cart.name}>
                                        <td className='border border-gray-300 px-4'>{cart.name}</td>
                                        <td className='border border-gray-300 px-4'>${cart.cost}</td>
                                        <td className='border border-gray-300 px-4'>{cart.booking}</td>
                                        <td className='border border-gray-300 px-4'>${cart.booking * cart.cost}</td>
                                    </tr>
                                ))}

                                <tr>
                                    <td colSpan={3} className="text-right px-4 border border-gray-300"><span className='font-bold'>Total</span></td>
                                    <td className="border border-gray-300 px-4"><span className='font-bold'>${totalCartAmont}</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div> 
                    {/* <div className='pt-4'> 
                        <button
                            onClick={() => setIsProcessing(true)}
                            className="mt-4 px-5 py-2.5 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm font-semibold tracking-wide transition text-white"
                            >
                            Confirm and Book Now
                        </button>
                    </div>                */}
                </div>
            </div>
        </>
    )
} 