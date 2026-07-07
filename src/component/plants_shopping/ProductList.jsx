
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../store/plantShoppingSlice';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function ProductList() {
    const navigate = useNavigate(); 
    const products = useSelector((state) => state.plant.products)
    const carts = useSelector((state) => state.plant.carts)
    const dispatch = useDispatch();

    return (
        <>
        <main>
            <div className="bg-cover bg-center h-screen w-full h-screen items-center mt-8 ">
                <div className="flex flex-col items-center text-center">    
                    {/* <p className="text-xl font-bold">Conference ExpensePlanner</p>
                    <p className="pt-2 text-slate-500">Plan your next major event with us!</p> */}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4  gap-2 mt-8 mx-auto px-6 w-full items-center">
                    { products.map((product) => {
                        const isAlreadyInCart = carts.some((cartItem) => cartItem.id === product.id);
            
                        return (
                        <div 
                            key={product.id} 
                            className="border border-slate-300 p-4 rounded-lg max-w-sm"
                        >
                            
                            <img src={product.imageUrl} alt={product.name} className="w-full h-[230px] object-cover rounded"/>
                            
                            <h4 className='mt-2'>{product.name}</h4>
                            <p className='mt-2 text-sm font-bold text-red-300'>${product.cost}</p>
                            <p className='mt-2 text-xs ' >{product.description}</p>
                            <div>
                                <button 
                                    className={`mt-4 px-5 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition text-white ${
                                    isAlreadyInCart 
                                    ? 'bg-gray-400 cursor-not-allowed' 
                                    : 'bg-gray-600 hover:bg-gray-800'
                                    }`}
                                    onClick={() =>  dispatch(addItem(product))}
                                    disabled={isAlreadyInCart}>
                                    {isAlreadyInCart ? 'Added to Cart' : 'Add to Cart'}
                                </button>
                            </div>
                        </div>
                        )
                    })}
                </div>
            
            </div>
        </main>
        </>
    );
}

export default ProductList;
