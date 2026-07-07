
import { useSelector, useDispatch } from 'react-redux';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import { removeItem, updateQuantity } from '../../store/plantShoppingSlice';

export default function CartItem() {

    const dispatch = useDispatch();
    
    const carts = useSelector((state) => state.plant.carts)
    const totalCartAmont = useSelector((state) => state.plant.totalCartPrice)
    const navigate = useNavigate(); 

    const handleChange = (id, change) => {
        dispatch(updateQuantity({ id, change: change }));
    };

    const handleRemove = (id) => {
        dispatch(removeItem({id}) )
    }

 
    return (
        <>
        <main>
            {totalCartAmont === 0 ? (
                <p className="text-center text-gray-500 mt-8 font-medium pt-12">
                Cart is empty 🛒
                </p>
            ) : (
                  <>
            <p className='py-5 text-sm font-bold'>Total Cart Amount: ${totalCartAmont} </p>
            <div className='grid grid-cols-1 justify-items-center gap-1 w-full'>
                {carts.map((cart) => { 
                    return (
                       
                    <div 
                        key={cart.id} 
                        className="border border-slate-300 p-4 rounded-lg w-[250px] text-left"
                    >
                        <img src={cart.imageUrl} alt={cart.name} className="w-full h-[150px] object-cover rounded"/>
                        <h4 className='mt-2 text-sm'>{cart.name}</h4>
                        <p className='pt-2 text-xs font-bold' >${cart.cost}</p>
                        
                        {/* Counter Controls */}
                        <div className="flex items-center gap-2 mt-2">
                            <button className='px-2 py-0.5 bg-slate-700 hover:bg-slate-600 rounded-lg text-xs font-semibold tracking-wide transition text-white' onClick={() => handleChange(cart.id, -1)}>-</button>
                            <span className="font-bold text-xs">{cart.booking}</span>
                            <button className='px-2 py-0.5 bg-slate-700 hover:bg-slate-600 rounded-lg text-xs font-semibold tracking-wide transition text-white' onClick={() => handleChange(cart.id, 1)}>+</button>
                        </div>

                        <p className='pt-2 text-xs font-bold'>Total: ${cart.booking * cart.cost} </p>

                        <button className='mt-2 px-2 py-1 bg-red-500 hover:bg-red-400 rounded-lg text-xs font-semibold tracking-wide transition text-white' onClick={() => handleRemove(cart.id)}>Remove</button>
                    </div>
                    )
                })}
            </div>
            <div>
                <button className="md:w-50 mt-4 px-5 py-2.5 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm font-semibold tracking-wide transition text-white" 
                    onClick={(e) => {
                        e.preventDefault(); 
                        navigate('/plant-shopping/product')

                    }}>
                    Continue Shopping
                </button>
            </div>
            <div>
                <button 
                    className = {`md:w-50 mt-4 px-5 py-2.5 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm font-semibold tracking-wide transition text-white 
                        ${ totalCartAmont <= 0  
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-gray-600 hover:bg-gray-800'
                        } `}
                        disabled={totalCartAmont <= 0 ? true : false }
                    onClick={(e) => {
                        e.preventDefault(); 
                        navigate('/plant-shopping/checkout')

                    }}>
                    Checkout
                </button>
            </div>
        </>
            )}
        </main>
        </>
    )
}