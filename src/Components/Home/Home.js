import React, { useEffect } from 'react';
 
import { useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Slider from '../Header/Slider';
import Card from './Card';

const Home = () => {
const datas=useLoaderData()
    
 
    return (
       <div>
        <div>
            <Slider/>
        </div>
         <div className='card-container mt-5'> 
            {
                datas.map((data,index)=><Card key={index} data={data}/>)
            } 
        </div>
        <Footer/>
       </div>
    );
};

export default Home;