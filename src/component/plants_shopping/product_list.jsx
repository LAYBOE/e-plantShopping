
import { useSelector, useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import Item from './item';
import Header from './header';

function ProductList() {
    const navigate = useNavigate(); 

    return (
        <>
        <Header></Header>
        <main>
            <div className="bg-cover bg-center h-screen w-full h-screen items-center mt-8 ">
                <div className="flex flex-col items-center text-center">    
                    {/* <p className="text-xl font-bold">Conference ExpensePlanner</p>
                    <p className="pt-2 text-slate-500">Plan your next major event with us!</p> */}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4  gap-2 mt-8 mx-auto px-6 w-full items-center">
                        <Item></Item>
                </div>
            
            </div>
        </main>
        </>
    );
}

export default ProductList;
