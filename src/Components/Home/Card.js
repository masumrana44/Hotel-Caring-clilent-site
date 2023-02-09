import React from 'react';
import './Card.css';
import { FaBath, FaProcedures, FaPeopleArrows } from "react-icons/fa";
import { MdKitchen } from "react-icons/md";
import { Button } from 'bootstrap';

const Card = ({ data }) => {
    console.log(data)
    const { Cetagory, img, capacity, bathroom, badroom, price } = data;
    console.log(Cetagory)
    return (
        <div className='card '>
            <img src={img} />
            <div className='card-dettails'>
                <h3>{Cetagory}</h3>
                <div id='card-object' className='d-flex text-secondary mt-1 '>
                    <div >
                        <div>
                            <h5 className='d-flex align-items-center'> <FaProcedures />:-  <small
                                className='h5' /> {badroom} Badroom Available </h5>
                        </div>

                        <div>
                            <h5><FaPeopleArrows />:- {capacity} <small>Person Capacity</small></h5>
                        </div>
                    </div>

                    <div className='ms-5' id='avaiable'>
                        <div>
                            <h4 className='d-flex align-items-center'><FaBath /> :-
                                <small>Available</small></h4>
                        </div>

                        <div>
                            <h5><MdKitchen />:- <small>Available</small></h5>
                        </div>
                    </div>
                </div>

                <div className='text-success'>
                    <h4>Price: ${price}/<small className='text-muted'>night</small></h4>
                </div>
            </div>
            <div className='   '>
                <button className='booking-btn'>More info</button>
            </div>
        </div>
    );
};

export default Card;