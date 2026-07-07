
import { useSelector, useDispatch } from 'react-redux';
import Header from './header';
import { useNavigate } from 'react-router-dom';
import { removeFromCart, updateCartItem } from '../../store/plantShoppingSlice';
import CartItem from './cartItem';

export default function PlantCart() {

    const dispatch = useDispatch();
    
    const carts = useSelector((state) => state.plant.carts)
    const totalCartAmont = useSelector((state) => state.plant.totalCartPrice)
    const navigate = useNavigate(); 
    const handleChange = (id, change) => {
        dispatch(updateCartItem({ id, change: change }));
    };

    const handleRemove = (id) => {
        dispatch(removeFromCart({id}) )
    }

    return (
        <>
        <Header></Header>
        <main>
            {totalCartAmont === 0 ? (
                <p className="text-center text-gray-500 mt-8 font-medium pt-12">
                Cart is empty 🛒
                </p>
            ) : (
                <CartItem />
            )}
        </main>
        </>
    )
}