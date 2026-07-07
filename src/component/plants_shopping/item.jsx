import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../store/plantShoppingSlice';
// import { updateAddOn } from '../../store/bookingSlice'

export default function Item() {

    const products = useSelector((state) => state.plant.products)
    // const totalCostAddon = useSelector((state) => state.booking.totalCostAddon)

    const carts = useSelector((state) => state.plant.carts)
    const dispatch = useDispatch();

    // const handleChange = (id, change) => {
    //     dispatch(updateAddOn({ id, change: change }));
    // };

    // const addToCart = (product) => {
    //  //logic add to cart heres
    // };


    return (
        <>
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
                        onClick={() =>  dispatch(addToCart(product))}
                        disabled={isAlreadyInCart}>
                        {isAlreadyInCart ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                </div>
            </div>
            )
        })}
        </> 
  );
}
