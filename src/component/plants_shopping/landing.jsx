import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function PlantLanding() {
    const navigate = useNavigate(); 
    return (
        <>
        <Header></Header>
        <main>
            <div className="bg-plant-bg bg-cover bg-center h-screen w-full flex items-center">
                <div className="grid lg:grid-cols-3 gap-4 max-w-6xl mx-auto px-6 w-full items-center ">
                    <div className="flex flex-col items-center text-center">      
                        <p className="text-xl font-bold text-white">Welcome To Paradise Nursery</p>
                        <p className="text-white pt-2">Where Green Meets Serenity</p>
                        <button className="mt-4 px-5 py-2.5 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm font-semibold tracking-wide transition text-white" 
                            onClick={(e) => {
                                e.preventDefault(); 
                                navigate('/plant-shopping/product')

                            }} >
                                Get Start
                            </button>
                    </div>
                    <div className="flex flex-col lg:col-span-2">
                        <p className="text-white items-center text-center">Welcome to Paradise Nursery, where green meets serenity!</p>
                        <p className="text-white text-left pt-4">At Paradise Nursery, we are passionate about bringing nature closer to you. Our mission is to provide a wide range of high-quality plants that not only enhance the beauty of your surroundings but also contribute to a healthier and more sustainable lifestyle. From air-purifying plants to aromatic fragrant ones, we have something for every plant enthusiast.</p>
                        <p className="text-white text-left pt-4">Our team of experts is dedicated to ensuring that each plant meets our strict standards of quality and care. Whether you're a seasoned gardener or just starting your green journey, we're here to support you every step of the way. Feel free to explore our collection, ask questions, and let us help you find the perfect plant for your home or office.</p>
                        <p className="text-white text-left pt-4">Join us in our mission to create a greener, healthier world. Visit Paradise Nursery today and experience the beauty of nature right at your doorstep.</p>
                    </div>
                </div>
                </div>
            </main>
        </>
    );
}

export default PlantLanding;
